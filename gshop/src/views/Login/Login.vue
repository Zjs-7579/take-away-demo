<template>
    <HeaderTop>
        <template  v-slot:left >
            <span class="left" @click="$router.go(-1)"> &lt;</span>
        </template >
    </HeaderTop>
    <div class="title">
        <p>外卖配送</p>
    </div>
    <div class="fromAbel">
        <div class="dataBtn">
            <span @click="isformBool = true" :style="{color: isformBool?'red':'black'}">短信登录</span>
            <span @click="isformBool = false" :style="{color: isformBool?'black':'red'}">密码登录</span>
        </div>
        <form v-show="isformBool" class="form1">
            <div>
                <input class="phoneUser" type="text" placeholder="手机号" v-model="phone">
                <button class="BtnYzm" type="button" disabled="disabled" ref="phoneYzm" @click="phoneYzm()">获取验证码</button>
            </div>
            <input type="text" placeholder="验证码" v-model="verifyNumber">
            <p>
                温馨提示：未注册的手机号账号，当登陆时自动注册，且代表同意
                <span> &lt;&lt;用户服务协议&gt;&gt;</span>
            </p>
            <button type="button" @click="addDataForm1">登录</button>
            <p>关于我们</p>
        </form>
        <form v-show="!isformBool" class="form2">
            <div class="user">
                <input type="text" placeholder="手机/邮箱/用户名" v-model="username">
            </div>
            <div class="pwd">
                <input class="mima" type="password" ref="input" placeholder="密码" v-model="password">
                <input class="open" type="checkbox" :checked="checked" @click="Check(checked =! checked)">
            </div>
            <div class="img">
                <input type="text" placeholder="验证码" v-model="verifySum">
                <input type="button" @click="refurbish" v-model="yzm">
            </div>
            <button type="button" @click="addDataForm2">登录</button>
            <p>关于我们</p>
        </form>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import {mapState} from 'vuex'
    import {reqdata} from '../../api/transfer'
    import {PhoneLogin} from '../../api/login'
    export default {
        name: "Login",
        data() {
            return {
                phone:'', // 手机号
                verifyNumber: '', //手机号验证码
                username: '', // 用户姓名
                password: '', // 用户密码
                verifySum: '', //用户名验证码
                yzm: '点击获取', //用户验证码
                yzmID: '', //用户验证码数据ID
                checked: false, //判断密码查看情况
                isformBool: true //判断登录方式
            }
        },
        components: {
            HeaderTop
        },
        computed: {
            ...mapState(['verify']),
        },
        methods:{
            Check(bool) {
                if(bool){
                    this.$refs.input.type = "text"
                }else {
                    this.$refs.input.type = "password"
                }
            },
            phoneYzm() {
                let time = 30;
                let YZM = setInterval(() => {
                    this.$refs.phoneYzm.style.color = 'black';
                    this.$refs.phoneYzm.innerText = '倒计时' + time + 's';
                    time--;
                    if (time < 0) {
                        clearInterval(YZM);
                        this.$refs.phoneYzm.style.color = '#ccc';
                        this.$refs.phoneYzm.innerText = '获取验证码';
                    }
                }, 1000);
            },
            refurbish() {
                let number = Math.floor(Math.random()*10);
                this.yzmID = number;
                this.$nextTick( () => {
                    this.yzm = this.verify[number].reckon
                })

            },
            addDataForm1() {
                let phone = this.phone;
                let verifyNumber = Number(this.verifyNumber);
                let data = {
                    //id: new Date().getTime(),
                    phone,
                    verify: verifyNumber
                };
                //console.log(phone, verifyNumber, data);
                if(verifyNumber === 123456){
                    reqdata('http://localhost:3000/phone').then(
                        res=> {
                            //console.log(res);
                            let phoneID = res.filter(res=>{
                                if (phone === res.phone) {
                                    return true
                                }
                            });

                            if (phoneID.length) {
                                this.$store.commit('Call', data);
                                this.$router.push({
                                    path: `/msite`,
                                })
                            }else {
                                PhoneLogin('http://localhost:3000/phone', data);
                                this.$store.commit('Call', data);
                                this.$router.push({
                                    path: `/msite`,
                                })
                            }
                        }
                    ).catch(err=>console.log(err))
                }else {
                    alert('验证码错误');
                    this.verifyNumber = ''
                }
            },
            addDataForm2() {
                let sum = Number(this.verifySum);
                let username = this.username;
                let password = this.password;
                let data = {
                    username,
                    password
                };
                if(sum === this.verify[this.yzmID].sum) {
                    //判断账号密码
                    console.log('判断账号对');
                    reqdata('http://localhost:3000/userInfo').then(
                        res => {
                            let user = res.filter(
                                res => {
                                    console.log(res);
                                    if (username === res.username && password === res.password) {
                                        console.log('dui');
                                        return true
                                    }
                                }
                            );

                            if (user.length) {
                                this.$store.commit('userID', data);
                                this.$router.push({
                                    path: `/msite`,
                                })
                            } else {
                                PhoneLogin('http://localhost:3000/userInfo', data);
                                this.$store.commit('userID', data);
                                this.$router.push({
                                    path: `/msite`,
                                })
                            }
                        }
                    ).catch(error => console.log(error))
                }else {
                    alert('验证码错误');
                    this.verifySum = ''
                }
            }
        },
        watch: {
            phone() {
                console.log(this.phone);
                const reg = /^1[3|4|5|7|8][0-9]{9}$/;
                let flg = reg.test(this.phone);
                if (flg) {
                    console.log(flg);
                    this.$refs.phoneYzm.disabled = false;
                    this.$refs.phoneYzm.style.color = 'black'
                }
            }
        }

    }
</script>

<style scoped lang="less">
    .left{
         line-height: 35px;
         text-align: left;
         text-indent: 0.5em;
         color: #fff;
     }
    .title{
        width: 100%;
        height: 60px;
        p{
            font-weight: bold;
            font-size: 40px;
            text-align: center;
        }
    }
    .fromAbel{
        width: 100%;
        height: 300px;
        .dataBtn{
            width: 100%;
            height: 30px;
            display: flex;
            span{
                display: block;
                flex: 1;
                text-align: center;
                line-height: 30px;
            }
        }
        .form1{
            display: block;
            div{
                display: flex;
                margin: 0px 6.5%;
            }
            input{
                display: block;
                margin: 20px auto;
                width: 81%;
                padding: 12px 5px;
            }
            .phoneUser{
                width: 61%;
            }
            button{
                width: 85%;
                display: block;
                margin: 20px auto;
                padding: 12px;
                background-color: #00ff33;
                color: #fff;
                border:none;
                outline: none;
            }
            .BtnYzm{
                padding: 0px;
                background-color: white;
                font-size: 12px;
                width: 25%;
                display: block;
                color: #ccc;
                margin: 20px auto;
                text-align: center;
                line-height: 45px;
            }
            p{
                width: 84%;
                display: block;
                margin: 0 auto;
                text-align: center;
                font-size: 14px;
                span{
                    color: red;
                }
            }

        }


        .form2{
            button{
                width: 85%;
                display: block;
                margin: 20px auto;
                padding: 12px;
                background-color: #00ff33;
                color: #fff;
                border:none;
                outline: none;
            }
            input{
                padding: 12px 5px;
            }
            .user{
                width: 100%;
                input{
                    display: block;
                    width: 84%;
                    margin: 20px auto;

                }
            }
            .pwd{
                width: 87%;
                margin-left: 6%;
                //border:1px solid #ccc;
                display: flex;
                background-color: #fff;
                .mima{
                    flex: 4;
                    //border: none;
                    //outline: none;
                }
                .open{
                    flex: 1;
                    width: 30px;
                    height: 30px;
                    margin: 6px 0;
                }
            }
            .img{
                width: 87%;
                margin: 21px 0 20px 6%;
                display: flex;
                input:first-child{

                    width: 60%;
                }
                input:last-child {
                    width: 30%;
                    margin-left: 5%;
                    border: none;
                    outline: none;
                    background-color: white;
                }
                span{
                    display: inline-block;
                    float: right;
                    width: 45%;
                    line-height: 45px;
                    font-size: 25px;
                    text-align: center;
                    background-color: #ccc;
                }
            }
            p{
                text-align: center;
            }
        }
    }
</style>