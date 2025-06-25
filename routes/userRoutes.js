import express from 'express'
import { registerUser, loginUser, getUserBalance, transferBalance, getTransactionDetails, registerAdmin, getUserTransactions } from '../controllers/userController.js'
import { protect, isAdmin } from '../Middleware/authMiddleware.js'
import validateInput from '../Middleware/inputValidation.js'
import { registerUserInput, loginUserInput, transferBalanceInput, registerAdminInput } from '../validators/userValidators.js'

const router = express.Router()

router.post('/register', validateInput(registerUserInput), registerUser)
router.post('/login', validateInput(loginUserInput), loginUser)
router.get('/balance', protect, getUserBalance)
router.post('/transfer', validateInput(transferBalanceInput), protect, transferBalance)
router.get('/transactions', protect, isAdmin, getTransactionDetails)
router.post('/adminReg', validateInput(registerAdminInput), registerAdmin)
router.get('/getUserTranasaction', protect, getUserTransactions)

export default router
