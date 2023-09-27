import { ObjectId } from 'mongodb'

interface UserType {
  _id?: ObjectId
  name: string
  email: string
  password: string
  address?: Address[]
  wishlist?: WishlistItem[]
  cart?: CartItem[]
  orders?: Order[]
  email_verify_token?: string
  forgot_password_token?: string
  created_at?: Date
  update_at?: Date
}

interface Address {
  name: string
  street: string
  city: string
  phone: string
}

interface WishlistItem {
  product: ObjectId // reference to Product model
}

interface CartItem {
  product: ObjectId // reference to Product model
  quantity: number
}

interface Order {
  products: OrderItem[]
  transaction_id: string
  amount: number
  address: Address
}

interface OrderItem {
  product: ObjectId // reference to Product model
  quantity: number
}

export default class User {
  _id: ObjectId
  name: string
  email: string
  password: string
  address: Address[]
  wishlist: WishlistItem[]
  cart: CartItem[]
  orders: Order[]
  email_verify_token: string
  forgot_password_token: string
  created_at: Date
  update_at: Date

  constructor(user: UserType) {
    const date = new Date()
    ;(this._id = user._id || new ObjectId()),
      (this.name = user.name),
      (this.email = user.email),
      (this.password = user.password),
      (this.address = user.address || []),
      (this.wishlist = user.wishlist || []),
      (this.cart = user.cart || []),
      (this.orders = user.orders || []),
      (this.email_verify_token = user.email_verify_token || ''),
      (this.forgot_password_token = user.forgot_password_token || '')
    ;(this.created_at = user.created_at || date), (this.update_at = user.update_at || date)
  }
}
