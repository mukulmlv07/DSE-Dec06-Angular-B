import { users } from "./fakeDB.js"
import { quotes } from "./fakeDB.js"
import {randomBytes} from 'crypto'
import { User } from "./Models/User.js"
import { Quote } from "./Models/Quote.js"

export const resolvers={
  Query:{
    users:async()=>await User.find(),
    user:async(_,{email})=>await User.findOne({email:email}),
    quotes:async()=>await Quote.find().populate("by","_id name"),
    quote:(_,{by})=>quotes.filter(quote=>quote.by==by)
  },
  User:{
    quotes:(user)=>quotes.filter(quote=>quote.by==user._id)
  },
  Mutation:{
    signup:async(_,{newUser})=>{
      // console.log(newUser)
      // const _id=randomBytes(5).toString("hex")
      // users.push(
      //   {
      //     _id,
      //     ...newUser
      //   }
      // )
      // return users.find(user=>user._id===_id)
     
      const user=await User.findOne({email:newUser.email})
      if(user){
        console.log('Already Available')
        throw new Error('Already Available')
      }else{
        const creatUser=new User({
          ...newUser
        })
        await creatUser.save()
        console.log("sigmup success")
        return await User.findOne({email:newUser.email})
      }
    },

    addQuote:async(_,{newQuote})=>{
      console.log(newQuote)
      const quoteNew=new Quote({
        ...newQuote
      })
      await quoteNew.save()
      return quoteNew
    },

    login:async(_,{loginUser})=>{
      const fetchedUser=await User.findOne({email:loginUser.email})
      if(!fetchedUser){
        console.log('user not found')
        throw new Error('user not found')
      }
      if(fetchedUser.password==loginUser.password){
        console.log('Login Successfully')
        return fetchedUser
      }
      else{
        throw new Error('emial or password is incorrect')
      }
    }
  }
}
