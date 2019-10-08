'use strict';

/**
 * Places.js controller
 *
 * @description: A set of functions called "actions" for managing `Places`.
 */

module.exports = {

  /**
   * Retrieve places records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.places.search(ctx.query);
    } else {
      return strapi.services.places.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a places record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.places.fetch(ctx.params);
  },

  /**
   * Count places records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.places.count(ctx.query);
  },

  /**
   * Create a/an places record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.places.add(ctx.request.body);
  },

  /**
   * Update a/an places record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.places.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an places record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.places.remove(ctx.params);
  }
};
