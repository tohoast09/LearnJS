import logger from './logger.js'
import * as constant from './logger.js'
console.log(constant);

logger('log1',constant.TYPE_WARN);


// import ko dùng destrcterings 
// Thay vì:
// import logger from './logger.js'
// ecport default logger;
// có thê dùng gói gọn trong 1 câu lệnh
// export { default } from './logger.js'
// Nếu không muốn default:
// export { default as logger2 } from './logger.js'