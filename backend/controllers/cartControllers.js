import userModel from "../models/userModels.js"

// add product to user cart
const addCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body
        const userdata = await userModel.findById(userId)
        let cartdata = userdata.cartdata

        if (cartdata[itemId]) {
            if (cartdata[itemId][size]) {
                cartdata[itemId][size] += 1;
            } else {
                cartdata[itemId][size] = 1
            }
        } else {
            cartdata[itemId] = {}
            cartdata[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartdata })

        res.json({ success: true, message: "Added to cart" })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}

// update cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body
        const userdata = await userModel.findById(userId)
        let cartdata = userdata.cartdata

        if (!cartdata[itemId]) {
            cartdata[itemId] = {}
        }
        cartdata[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, { cartdata })

        res.json({ success: true, message: "Cart updated" })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}

// getUser cart data
const getCartData = async (req, res) => {
    try {
        const { userId } = req.body
        const userdata = await userModel.findById(userId)
        let cartdata = userdata.cartdata

        res.json({ success: true, cartdata })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}

export { addCart, updateCart, getCartData }