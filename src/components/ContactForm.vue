<template lang="html">
  <div class="card" :class="sending" id="contactForm">
    <div v-if="errors" class="card-header text-center error-header">
      <p class="fz-l">Please check the errors below:</p>
    </div>
    <div v-if="success" class="card-header text-center success-header">
      <p class="fz-l">Great! Your message was sent.</p>
    </div>
    <transition name="slide_up">
      <div v-if="sending" class="sending">
        <ul class="circle-loader">
    			<li></li>
    			<li></li>
    			<li></li>
    		</ul>
        Sending
      </div>
    </transition>
    <div class="card-body">
      <form v-on:submit.prevent="submitForm">
        <fieldset class="form-group" v-bind:class="{ valid: validation.full_name.valid, error: validation.full_name.error }">
          <label for="" class="control-label">Name</label>
          <input class="form-control form-control-lg" type="text" v-model="contactForm.full_name" v-on:keyup="checkField('full_name')" v-on:change="checkField('full_name')" placeholder="Your full name">
          <transition name="pop_in">
            <div class="error-message" v-if="validation.full_name.error">
              {{validation.full_name.errorMsg}}
            </div>
          </transition>
        </fieldset>
        <fieldset class="form-group" v-bind:class="{ valid: validation.email.valid, error: validation.email.error }">
          <label for="" class="control-label">Email Address</label>
          <input class="form-control form-control-lg" type="email" v-model="contactForm.email" v-on:keyup="checkField('email')" placeholder="e.g. paul@apostle.com">
          <transition name="pop_in">
            <div class="error-message" v-if="validation.email.error">
              {{validation.email.errorMsg}}
            </div>
          </transition>
        </fieldset>
        <fieldset class="form-group" v-bind:class="{ valid: contactForm.subject }">
          <label for="" class="control-label">Subject <small>(optional)</small></label>
          <input class="form-control form-control-lg" type="text" v-model="contactForm.subject" placeholder="What's the message about?">
        </fieldset>
        <fieldset class="form-group" v-bind:class="{ valid: validation.message.valid, error: validation.message.error }">
          <label for="" class="control-label">Message</label>
          <textarea class="form-control form-control-lg" type="text" v-model="contactForm.message" v-on:keyup="checkField('message')" v-on:change="checkField('message')" placeholder="Write your message/question here"></textarea>
          <transition name="pop_in">
            <div class="error-message" v-if="validation.message.error">
              {{validation.message.errorMsg}}
            </div>
          </transition>
        </fieldset>
        <div class="text-center">
          <button class="btn btn-primary btn-block-xs">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "contact-form",
  data() {
    return{
      contactForm: {
        full_name: "",
        email: "",
        subject: "",
        message: "",
        source: "church"
      },
      validation: {
        full_name: {
          valid: false,
          error: false,
          minlength: 2,
          errorMsg: "Please give us your name"
        },
        email: {
          valid: false,
          error: false,
          errorMsg: "Please give us a valid email address"
        },
        message: {
          valid: false,
          error: false,
          minlength: 10,
          errorMsg: "Please type a message longer than 10 characters"
        },
      },
      errors: "",
      sending: false,
      success: false
    }
  },
  methods: {
    checkField: function(field){
      if(this.contactForm[field] && field !== "email" && this.contactForm[field].length >= this.validation[field].minlength){
        this.validation[field].valid = true;
        this.validation[field].error = false;
      } else if (this.contactForm[field] && this.validEmail(this.contactForm[field])) {
        this.validation[field].valid = true;
        this.validation[field].error = false;
      } else {
        this.validation[field].valid = false;
        this.validation[field].error = true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm: function(e){
      if(this.validation.full_name.valid && this.validation.email.valid && this.validation.message.valid){
        this.errors = false;
      } else {
        this.errors = true;
        this.checkField("full_name");
        this.checkField("email");
        this.checkField("message");
        this.$scrollTo("#contactForm");
      }
      return this.errors;
    },
    clearForm: function(){
      this.contactForm.full_name = "";
      this.validation.full_name.valid = false;
      this.validation.full_name.error = false;
      this.contactForm.email = "";
      this.contactForm.subject = "";
      this.validation.email.valid = false;
      this.validation.email.error = false;
      this.contactForm.message = "";
      this.validation.message.valid = false;
      this.validation.message.error = false;
      this.sending = false;
    },
    submitForm: function(){
      this.checkForm();
      var $this = this;
      if(!this.errors){
        this.sending = true;
        axios.post("https://restoreproject.co.uk/wp-json/contact_form/restorecf", this.contactForm)
        .then(function(response){
          $this.clearForm();
          $this.sending = false;
          $this.success = true;
          $this.$scrollTo("#app");
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/_mixins';
  .card{
    position: relative;
    overflow: hidden;
    @include xs-only{
      .card-body{
        padding: 1em;
      }
    }
  }
  .form-group{
    position: relative;
    padding-right: 2em;
    &::before{
      content: '';
      width: 0.35em;
      height: 1em;
      font-size: 1.5em;
      display: block;
      position: absolute;
      -webkit-transform: translateX(-30px);
      -ms-transform: translateX(-30px);
      transform: translateX(-30px);
      right: 0;
      bottom: 15px;
      opacity: 0;
      border-right: 3px solid #77b36c;
      border-bottom: 3px solid #77b36c;
      -webkit-transition: opacity 0.2s ease-out, transform 0.2s ease;
      -o-transition: opacity 0.2s ease-out, transform 0.2s ease;
      transition: opacity 0.2s ease-out, transform 0.2s ease;
    }
    &.error{
      .form-control{
        border-color: $color_primary;
      }
    }
    &.valid{
      &::before{
        opacity: 1;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
  .card .error-header{
    background-color: $color_primary;
    color: #fff;
  }
  .card .success-header{
    background-color: #7ab570;
    font-weight: bold;
    color: #fff;
  }
  .error-message{
    background-color:#666;
    color: #fff;
    font-size: rem(14px);
    padding: 0.75em;
    border-radius: 6px;
    margin-top: rem(5px);
    position: absolute;
    display: inline-block;
    z-index: 10;
    right: 2em;
    top: 100%;
    &::before{
      content: '';
      display: block;
      border-bottom: 12px solid #666;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      position: absolute;
      top: -12px;
      right: 20px;
      margin-left: -10px;
    }
  }
  .pop_in-enter-active, .pop_in-leave-active{
    transform-origin: top;
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .pop_in-enter, .pop_in-leave-to{
    opacity: 0;
    -webkit-transform: translate(-50%, -10px) scale(0.5);
    -ms-transform: translate(-50%, -10px) scale(0.5);
    transform: translate(-50%, -10px) scale(0.5);
  }
  .slide_up-enter-active, .slide_up-leave-active{
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
  .slide_up-enter, .slide_up-leave-to{
    opacity: 0;
    -webkit-transform: translateY(30%);
    -ms-transform: translateY(30%);
    transform: translateY(30%);
  }
  .sending{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: block;
    background-color: rgba(255,255,255,0.75);
    z-index: 10;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-transform: uppercase;
    font-weight: bold;
    @include uppercasetitle;
    font-size: 1em;
  }
</style>
