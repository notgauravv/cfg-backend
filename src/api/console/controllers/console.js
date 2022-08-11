'use strict';

/**
 *  console controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::console.console');
