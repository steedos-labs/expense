/*
 * @Author: 孙浩林 sunhaolin@steedos.com
 * @Date: 2023-08-07 17:56:21
 * @LastEditors: 高红新 gaohongxin@steedos.com
 * @LastEditTime: 2023-08-09 10:34:11
 * @FilePath: /chinaums-oa-apps-gitlab/steedos-packages/attendance/src/actions/dailySettlement/businessTripSettlement.js
 * @Description: 出差结算
 */
'use strict';
const _ = require('lodash');
const moment = require('moment');
module.exports = {
    handler: async function (ctx) {
        const { businessTripId } = ctx.params;

        // 获取出差台账
        const businessTrip = await ctx.call('objectql.findOne', {
            objectName: 'attendance_business_out',
            id: businessTripId,
        })
        if (!businessTrip) {
            throw new Error('出差台账不存在');
        }
        
        const { applicant: userId, start_time: start, end_time: end } = businessTrip;

        const dateList = this.getSettlementDateList(start, end);

        // 计算每天的考勤情况
        for (const date of dateList) {
            await ctx.call('@steedos-labs/attendance.dailySettlement', {
                userId,
                date: moment(date).utcOffset(8).format('YYYY-MM-DD')
            })
        }

        return 'success'

    }
}
