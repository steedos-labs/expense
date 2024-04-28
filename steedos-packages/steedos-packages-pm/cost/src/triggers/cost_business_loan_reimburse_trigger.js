/*
 * @Author: 孙浩林 sunhaolin@steedos.com
 * @Date: 2023-10-24 17:48:34
 * @LastEditors: 孙浩林 sunhaolin@steedos.com
 * @LastEditTime: 2023-10-24 17:53:21
 * @FilePath: /steedos-ee-gitlab/steedos-packages-pm/cost/src/triggers/cost_business_loan_reimburse_trigger.js
 * @Description: 
 */
module.exports = {
    trigger: {
        listenTo: 'cost_business_loan_reimburse', // 借款核销
        when: [
            'afterUpdate',
        ],
    },
    async handler(ctx) {
        const { isInsert, isUpdate, isDelete, isFind, isBefore, isAfter, id, doc, previousDoc, size, userId, spaceId, objectName, query, data } = ctx.params;

        if (isAfter) {

            if (isUpdate) {
                if (doc.instances) {

                    await this.getObject('cost_reimburse_detail').updateMany(
                        [["instance.ids", "=", doc._id], ["space", "=", doc.space]],
                        { 'instance_state': doc.instance_state }
                    );
                }
            }

        }
    }
}

/**
 * const objectql = require('@steedos/objectql');

module.exports = {
    listenTo: 'cost_business_loan_reimburse',

    beforeInsert: async function(){
    },

    beforeUpdate: async function(){
    },

    afterInsert: async function(){
    },

    afterUpdate: async function(){
        let doc = this.doc;

        if (doc.instances){
            
            await objectql.getObject('cost_reimburse_detail').updateMany(
                [["instance.ids","=", doc._id],["space","=",doc.space]],
                {'instance_state': doc.instance_state}
            );
        }
    },

    afterDelete: async function(){
    },

}
 */