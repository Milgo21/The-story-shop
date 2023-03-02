"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const user_router_js_1 = __importDefault(require("./Routers/user.router.js"));
const product_router_js_1 = __importDefault(require("./Routers/product.router.js"));
const category_router_js_1 = __importDefault(require("./Routers/category.router.js"));
const order_router_js_1 = __importDefault(require("./Routers/order.router.js"));
const orderItem_router_js_1 = __importDefault(require("./Routers/orderItem.router.js"));
const payment_router_js_1 = __importDefault(require("./Routers/payment.router.js"));
const paymentMethod_router_js_1 = __importDefault(require("./Routers/paymentMethod.router.js"));
const review_router_js_1 = __importDefault(require("./Routers/review.router.js"));
const cartItem_route_js_1 = __importDefault(require("./Routers/cartItem.route.js"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api/users', user_router_js_1.default);
app.use('/api/products', product_router_js_1.default);
app.use('/api/categories', category_router_js_1.default);
app.use('/api/orders', order_router_js_1.default);
app.use('/api/orderitems', orderItem_router_js_1.default);
app.use('/api/payments', payment_router_js_1.default);
app.use('/api/paymentmethods', paymentMethod_router_js_1.default);
app.use('/api/reviews', review_router_js_1.default);
app.use('/api/cartitems', cartItem_route_js_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello!');
});
// cron.schedule('*/10 * * * * *', async() => {
//     console.log('running a task every 10 Second');
//     await sendWelcomeEmail()
//   });
