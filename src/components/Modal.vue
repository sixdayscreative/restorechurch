<template lang="html">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="card">
            <div class="card-header">
              <slot name="header">
                default header
              </slot>
            </div>

              <slot name="body">
                default body
              </slot>

            <div class="card-footer">
              <slot name="footer">
              </slot>
              <button class="btn btn-link" @click="$emit('close')">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NextGathering from '@/components/NextGathering'
export default {
  name: 'Modal',
}
</script>

<style lang="scss">
  @import '../assets/scss/_variables';
  @import '../assets/scss/_mixins';
  .modal-mask {
    position: fixed;
    overflow: auto;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    padding: 1.5em 0;
  }

  .modal-container {
    min-width: 300px;
    width: 60vw;
    margin: 0px auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
