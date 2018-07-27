/**
 * @swagger
 * /v1/exemple:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */


/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */


/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */
