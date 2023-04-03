// model: schema를 감싸주는 역할
// schema: 정보를 지정해주는 역할을 함

// 몽구스 모듈 가져오기
const mongoose = require('mongoose')

// 몽구스를 이용하여 스키마 생성하기
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        // trim: 띄어쓰기를 없애줌
        trim: true,
        // 이메일 중복 x
        unique: 1
    },
    password: {
        type: String, 
        minlength: 5
    },
    lastname: {
        type: String, 
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    Image: String,
    token: {
        type: String
    },
    // 토큰 유효기간
    tokenExp: {
        type: Number
    }
})

// 모델로 스키마 감싸기 
const User = mongoose.model('User', userSchema)

// 해당 모듈을 다른 파일에서도 쓸 수 있게끔 만듦
module.exports = { User}