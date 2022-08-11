'use strict';

/**
 * console service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::console.console');
