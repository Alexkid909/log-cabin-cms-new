'use strict';

/**
 * key-value-pair router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::key-value-pair.key-value-pair');
