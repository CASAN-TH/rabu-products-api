'use strict';
var controller = require('../controllers/controller'),
    policy = require('../policy/policy');
module.exports = function (app) {
    var url = '/api/products';
    var urlWithParam = '/api/products/:productId';
    app.route(url).all(policy.isAllowed)
        .get(controller.getList)
        .post(controller.create);

    app.route(urlWithParam).all(policy.isAllowed)
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.route('/api/productsrabu')
        .get(
            controller.findProductRabu,
            controller.returnData
        )

    app.route('/api/productsrabu/:productId')
        .get(controller.read)

    app.param('productId', controller.getByID, controller.getProductById);
}