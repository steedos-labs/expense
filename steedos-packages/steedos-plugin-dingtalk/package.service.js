/*
 * @Author: baozhoutao@steedos.com
 * @Date: 2023-05-22 10:59:57
 * @LastEditors: baozhoutao@steedos.com
 * @LastEditTime: 2023-05-22 11:00:34
 * @Description: 
 */
"use strict";
const project = require('./package.json');
const packageName = project.name;
const packageLoader = require('@steedos/service-package-loader');
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * 软件包服务启动后也需要抛出事件。
 */
module.exports = {
    name: packageName,
    namespace: "steedos",
    mixins: [packageLoader],
    /**
     * Settings
     */
    settings: {
        packageInfo: {
            path: __dirname,
			name: packageName,
			isPackage: true
        }
    },

    /**
     * Dependencies
     */
    dependencies: ['steedos-server', '@steedos/service-license'],

    /**
     * Actions
     */
    actions: {

    },

    /**
     * Events
     */
    events: {

    },

    /**
     * Methods
     */
    methods: {

    },

    /**
     * Service created lifecycle event handler
     */
    async created() {

    },

    /**
     * Service started lifecycle event handler
     */
    async started() {

    },

    /**
     * Service stopped lifecycle event handler
     */
    async stopped() {

    }
};
