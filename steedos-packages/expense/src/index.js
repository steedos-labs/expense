"use strict";
const path = require('path');
const project = require('../package.json');
const packageName = project.name;
const packageLoader = require('@steedos/service-package-loader');

const rests = require('./rests')
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
	},
	metadata: {
		$package: {
			name: project.name,
			path: path.join(__dirname, ".."),
			isPackage: true
		}
	},

	/**
	 * Dependencies
	 */
	dependencies: ["@steedos-labs/invoice"],

	/**
	 * Actions
	 */
	actions: {
		...rests,
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
