import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import UserProfileComponent from "../../../components/UserProfileComponent"
import { loginUserAction } from "../../../redux/Slice/loginUserSlice"
const UserProfile = props => {
	const {loginState} = useSelector(store => store.loginUser)
	const dispatch = useDispatch()
  
	const fetchUser = async _id => {
		const {data} = await axios.get("api/user/profile/" + _id)
    console.log("🚀 ~ fetchUser ~ data:", data.user)
    dispatch(loginUserAction(data.user))

		return data
	}
	const updateUSerApiRequest = async (name, lastName, phoneNumber, address, country, zipCode, city, password) => {
		const {data} = await axios.put("api/user/profile", {
			name,
			lastName,
			phoneNumber,
			address,
			country,
			zipCode,
			city,
			password,
		})
		return data
	}
	return (
		<UserProfileComponent updateUSerApiRequest={updateUSerApiRequest} loginState={loginState} fetchUser={fetchUser} />
	)
}

export default UserProfile
