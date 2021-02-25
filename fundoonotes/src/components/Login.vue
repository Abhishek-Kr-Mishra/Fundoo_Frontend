<template id="LoginVue">
    <div class="LoginForm">
        <div class="container mx-auto">
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-4 col-xl-3 Fundoo-Text">
                    <span style="color:#4488F3">F</span><span style="color:Red">u</span><span style="color:orange">n</span>
                    <span style="color:#4488F3">d</span><span style="color:Green">o</span><span style="color:Red">o</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-4 col-xl-3 SignIn-Text">
                    Sign In To Continue to Fundoo
                </div>
            </div>
            <div  class="form-group email-class">
                <input type="email" class="form-control form-control-lg input-group-lg email-input" placeholder="xyz@example.com" id="email" v-model="user.email" v-on:input="validateEmailID(user.email)"/>
                <div class="help-block text-danger email-error">{{ this.errors.email }}</div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                    <span class=" help-block email-helper">You can use letters, numbers and Periods</span>
                </div>
            </div>
            <div  class="form-group password-class">
                <input type="password" class="form-control form-control-lg input-group-lg password-input" placeholder="Password" id="password" v-model="user.password" v-on:input="validatePassword(user.password)"/>
                <div class="help-block text-danger password-error">{{ this.errors.password }}</div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                    <span class=" help-block password-helper">8 or more characters,mix of letters,numbers & symbol</span>
                </div>
            </div>
            <input type="submit" class="btn btn-primary" v-on:click="loginUser" />
            <router-link :to="{ name: 'Register' }" class="Create-Account">Create Account</router-link>
            <!-- <div class="Create-Account"><p><a href="" target="_blank">Create Account</a></p></div> -->
        </div>
    </div>
</template>

<script>
import userService from '../Services/userService'
export default {
    el: '#LoginVue',
    data() {
        return{
            user: {
                email: '',
                password: ''
            },
            errors: {},
            validText: {}}
        },
    methods:{
        validateEmailID: function(email){
            if (!email.match(/^[A-Za-z0-9]+([.\-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+[.][a-zA-Z]{2,4}([\\.][a-zA-Z]{2}){0,1}$/)) {
                this.errors.email = "Email is in wrong format.. Please check once"
            }
            else{
                this.validText.email=true;
                this.errors.email=null;
            }
        },
        validatePassword: function(password){
            if (!password.match(/^(?=.{8,}$)(?=.*?[0-9])(?=.*[A-Z])[a-zA-Z0-9]*[#!@$^&-][a-zA-Z0-9]*$/)) {
                this.errors.password = "Should Combination of (#,!,@,$,^,&,-), Capital letter, integer"
            }
            else{
                this.validText.password=true;
                this.errors.password=null;
            }
        },
        giveAlert: function(){
            if(this.validText.email == true && this.validText.password == true){
               return true
            }
            else{
                return false
            }
        },
        loginUser: function(){
            if(this.giveAlert){
                let data = {
                email: this.user.email,
                password: this.user.password
            }
            userService.loginUser(data)
            .then((res) => {
                console.log(res)
                const id = res.data.id
                localStorage.setItem("token", id)
                this.$router.push({ path: 'dashboard', redirect: '/' })
            })
            .catch(e => {
                console.log(e)
            })
            }
        }
    }
}
</script>

<style scoped>
.container{
    border: 1px solid lightgrey;
    border-radius: 10px;
    margin: 60px;
    position: absolute;
    top:0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.Fundoo-Text{
    font-size: xx-large;
    position: absolute;
    top: 70px;
    left: 180px;
}
.SignIn-Text{
    position: absolute;
    top: 120px;
    left: 120px;
    font-family: sans-serif;
    font-size: large;
    font-weight: 300;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.email-class{
    position: absolute;
    top: 240px;
    left: 80px;
    border-radius: 4px;
}
.email-helper{
    position: absolute;
    top: 290px;
    left: 90px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:grey;
    }
.email-error{
    position: absolute;
    top: 60px;
    left: 10px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:grey;
}
.password-class{
        position:absolute;
        top: 350px;
        left: 80px;
    }
.password-helper{
    position: absolute;
    top:395px;
    left: 90px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: grey;
}
.password-error{
    position: absolute;
    top:55px;
    left:10px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
.btn{
    position: absolute;
    top:450px;
    left: 380px
    }
.Create-Account{
    position: absolute;
    top: 450px;
    left: 70px
}
.Create-Account:hover{
    color: blue;
}
@media (min-width: 768px) and (max-width: 1023px){
    .container{
        width: 450px;
    }
}
@media (min-width: 1024px) {
.container{
    width:550px;
}}
@media (min-width: 1441px) and (max-width: 2560px) {
.container{
    width:800px;
}}
@media (min-width: 1024px) {
.email-input, .password-class{
    width:310px;
}}
@media (min-width: 445px) and (max-width: 768px)
{
    .email-class, .password-class{
        left: 75px;
        width: 250px;
    }
}
@media (min-width: 445px) and (max-width: 768px)
{
    .SignIn-Text{
        left: 55px;
    }
}
@media (min-width: 445px) and (max-width: 768px)
{
    .Fundoo-Text{
        left: 120px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .email-class{
        top: 150px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .email-helper{
        top: 200px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .email-error{
        top: 60px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .password-class{
        top: 250px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .password-helper{
        top: 300px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .password-error{
        top: 65px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .Create-Account{
        top: 370px;
    }
}
@media (min-width: 425px) and (max-width: 768px)
{
    .btn{
        top: 360px;
        left: 300px;
    }
}
@media (max-width: 424px){
    .email-class, .SignIn-Text, .Fundoo-Text, .email-helper, .email-error, .password-class, .password-helper, .password-error, .Create-Account{
        left: 0px;
    }
}
@media (max-width: 424px){
    .email-class{
        top: 150px;
    }
}
@media (max-width: 424px){
    .email-helper{
        top: 195px;
    }
}
@media (max-width: 424px){
    .password-class{
        top: 250px;
    }
}
@media (max-width: 424px){
    .password-helper{
        top: 300px;
    }
}
@media (max-width: 424px){
    .password-error{
        top: 70px;
        font-size: xx-small;
    }
}
@media (max-width: 424px){
    .Create-Account{
        top: 360px;
    }
}
@media (max-width: 424px){
    .btn{
        top: 360px;
        left: 170px;
    }
}
</style>