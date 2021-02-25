<template id="RegistrarionPage">
    <div class="RegisterVue">
        <div class="container mx-auto">
            <div class="image">
                <img class="img-fluid" :src="require('@/assets/Fundoo.png')" height=auto width=auto>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-4 col-xl-3 Fundoo-Text">
                    <span style="color:#4488F3">F</span><span style="color:Red">u</span><span style="color:orange">n</span>
                    <span style="color:#4488F3">d</span><span style="color:Green">o</span><span style="color:Red">o</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-4 col-xl-3 Register-Text">
                    Create your own Fundoo Account
                </div>
            </div>
            <div class="row">
                <div class="form-inline name-class">
                    <div class="form-group form-group-lg">
                        <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                            <input type="text" class="form-control first-name-class" placeholder="First Name" id="fname" v-model="user.firstName" v-on:input="validateFirstName(user.firstName)" />
                            <div class="help-block text-danger firstNameError">{{ this.errors.firstName }}</div>
                        </div>
                    </div>
                    <div class="form-group form-group-lg">
                        <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                            <input type="text" class="form-control second-name-class" placeholder="Last Name" id="lname" v-model="user.lastName" v-on:input="validateLastName(user.lastName)"/>
                            <div class="help-block text-danger lastNameError">{{ this.errors.lastName }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="form-group email-class">
                <input type="email" class="form-control input-group-lg email-input" placeholder="xyz@example.com" id="email" v-model="user.email" v-on:input="validateEmailID(user.email)"/>
                <div class="help-block text-danger email-error">{{ this.errors.email }}</div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                    <span class=" help-block email-helper">You can use letters, numbers and Periods</span>
                </div>
            </div>
            <div class="row">
                <div class="form-inline password-class">
                    <div class="form-group form-group-lg">
                        <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                            <input type="password" class="form-control password-text-class" placeholder="Password" id="pswd" v-model="user.password" v-on:input="validatePassword(user.password)" />
                        </div>
                    </div>
                    <div class="form-group form-group-lg">
                        <div class="col-md-5 col-sm-6 col-12 col-lg-6 col-xl-3">
                            <input type="password" class="form-control cnfrm-password-class" placeholder="Confirm" id="cnfrm" v-model="user.confirmPassword" v-on:input="cnfrmPassword(user.confirmPassword)"/>
                            <div class="help-block text-danger confirm-error">{{ this.errors.confirmPassword }}</div>
                        </div>
                    </div>
                    <span class="help-block password-helper">8 or more characters, mix of letters, numbers & symbol</span>
                    <div class="help-block text-danger password-error">{{ this.errors.password }}</div>
                </div>
            </div>
            <label class="checkbox-inline password-checkbox">
                <input type="checkbox" value="">Show Password
            </label>
                <input type="submit" class="btn btn-primary" v-on:click="registerUser" />
                <router-link :to="{ name: 'Login' }" class="signIn-link">Sign in Instead</router-link>
            </div>
    </div>
</template>

<script>
import userService from '../Services/userService'

export default {
    data() {
        return{
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {},
            validText: {}
        }
    },
  methods: {
        validateFirstName: function(firstName){
            if (!firstName.match(/^[A-Z][a-zA-Z]{2,}/)) {
                // this.valid=false
                this.errors.firstName = "1st letter capital & min length 3"
            }
            else{
                // this.valid=true
                this.errors.firstName=null;
                this.validText.firstName = true
            }
        },
        validateLastName: function(lastName){
            if (!lastName.match(/^[A-Z][a-zA-Z]{2,}/)) {
                // this.valid = false;
                this.errors.lastName = "1st letter capital & min length 3"
            }
            else{
                // this.valid=true;
                this.errors.lastName=null;
                this.validText.lastName = true
            }
        },
        validateEmailID: function(email){
            if (!email.match(/^[A-Za-z0-9]+([.\-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+[.][a-zA-Z]{2,4}([\\.][a-zA-Z]{2}){0,1}$/)) {
                // this.valid = false;
                this.errors.email = "Email is in wrong format.. Please check once"
            }
            else{
                // this.valid=true;
                this.errors.email=null
                this.validText.email = true
            }
        },
        validatePassword: function(password){
            if (!password.match(/^(?=.{8,}$)(?=.*?[0-9])(?=.*[A-Z])[a-zA-Z0-9]*[#!@$^&-][a-zA-Z0-9]*$/)) {
                // this.valid = false;
                this.errors.password = "Should Combination of (#,!,@,$,^,&,-), Capital letter, integer"
            }
            else{
                // this.valid=true;
                this.errors.password= null
                this.validText.password = true
            }
        },
        cnfrmPassword: function(confirmPassword){
            if(this.validText.password == true && confirmPassword !== this.user.password)
            {
                this.errors.confirmPassword = "Password Doesn't match"
            }
            else{
                this.validText.confirmPassword = true
                this.errors.confirmPassword = null
            }
        },
        registerUser: function(){
            if(this.giveAlert)
            {
                let data = {
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
                password: this.user.password,
                service: "advance"
                }
                console.log(data)
                userService.addUser(data)
                .then(response => {
                console.log(response)
                this.$router.push({ path: 'login', redirect: '/' })
            })
            .catch(e => {
            console.log(e)
            })
            }
        },
        giveAlert: function(){
            if(this.validText.firstName == true && this.validText.lastName == true && this.validText.email == true && this.validText.password == true && this.validText.confirmPassword == true){
               return true
            }
            else{
                return false
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
    .image{
        position: absolute;
        top: 90px;
        right: 50px;
    }
    .Fundoo-Text{
        position: absolute;
        top: 50px;
        left: 20px;
        font-family:sans-serif;
        font-size: larger;
        font-weight: 600;
    }
    .Register-Text{
        position: absolute;
        top: 70px;
        left: 20px;
        font-family: sans-serif;
        font-size: large;
        font-weight: 300;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .name-class{
        position:absolute;
        top: 130px;
    }
    .firstNameError{
        position: absolute;
        top: 35px;
        font-size: small;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .lastNameError{
        position: absolute;
        top: 35px;
        font-size: small;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .email-class{
        position: absolute;
        top: 240px;
    }
    .email-helper{
        position: absolute;
        top: 275px;
        font-size: small;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: grey;
    }
    .email-error{
        position: absolute;
        top: 50px;
        font-size: small;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .password-class{
        position:absolute;
        top: 310px;
    }
.password-helper{
    position: absolute;
    top:33px;
    left: 10px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: grey;
}
    .password-error{
    position: absolute;
    top:43px;
    left:10px;
    font-size: small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .password-checkbox{
        position: absolute;
        top: 410px;
        font-size: small;
    }
    .password-checkbox-input:hover{
       outline: 2px solid black;
    }
    .btn{
        position: absolute;
        top:410px;
        left: 345px
    }
    .signIn-link{
        color:#0069D9;
        position: absolute;
        top: 430px;
        font-size: 15px;
    }
    .signIn-link:hover{
        color:#660099;
    }
@media screen and (max-width: 767px) {
    .image{
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 1023px){
    .container{
        width: 700px;
    }
}
@media (min-width: 1024px) {
.container{
    width:800px;
}}
@media (min-width: 1441px) and (max-width: 2560px) {
.container{
    width:1200px;
}}
@media (min-width: 445px) {
.email-input{
    width:410px;
}}
@media (max-width: 320px){
    .password-helper .password-error{
        font-size: xx-small;
        left: 0;
    }
}
@media (max-width: 425px){
    .btn{
        top: 400px;
        left: 230px;
    }
}
</style>