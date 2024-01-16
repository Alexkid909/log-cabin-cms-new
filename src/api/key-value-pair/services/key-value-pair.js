'use strict';

/**
 * key-value-pair service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-value-pair.key-value-pair');
