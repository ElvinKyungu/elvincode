<script setup lang="ts">

</script>
<template>
  <section class="flex justify-center pt-10 z-0">
    <div class="absolute pl top-44">
      <div class="pl__outer-ring"></div>
      <div class="pl__inner-ring"></div>
      <div class="pl__track-cover"></div>
      <div class="pl__ball">
        <div class="pl__ball-texture"></div>
        <div class="pl__ball-outer-shadow"></div>
        <div class="pl__ball-inner-shadow"></div>
        <div class="pl__ball-side-shadows"></div>
      </div>
    </div>
    <div class=" bg-black/10 backdrop-blur-md ul  p-16 rounded-full mt-5">
      <div class="avatar  flex justify-center items-center">
        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img 
            src="@/assets/elvin.jpeg" 
            class="rounded-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

.pl,
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
	border-radius: 50%;
}

.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__ball-texture:before,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
	position: absolute;
}
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-texture:before,
.pl__track-cover {
	animation: ball 3s linear infinite;
}
.pl__ball {
	top: calc(40% - 1.25em);
	left: calc(40% - 1.25em);
	transform: rotate(0) translateY(-6.5em);
	width: 2.5em;
	height: 2.5em;
}
.pl__ball-inner-shadow {
	animation-name: ballInnerShadow;
	box-shadow:
		0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
		0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
		0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
	width: 100%;
	height: 100%;
}

.pl__ball-side-shadows {
	background-color: hsla(0, 0%, 0%, 0.1);
	filter: blur(2px);
	width: 100%;
	height: 100%;
	transform: scale(0.75,1.1);
	z-index: -1;
}
.pl__ball-texture {
	overflow: hidden;
	width: 100%;
	height: 100%;
	transform: translate3d(0,0,0);
}
.pl__ball-texture:before {
	animation-name: ballTexture;
	animation-duration: 0.25s;
	background: url(https://assets.codepen.io/416221/snow.jpg) 0 0 / 50% 100%;
	content: "";
	display: block;
	filter: brightness(1.05);
	top: 0;
	right: 0;
	width: 200%;
	height: 100%;
}


/* Animations */
@keyframes ball {
	from {
		transform: rotate(0) translateY(-6.5em);
	}
	50% {
		transform: rotate(180deg) translateY(-6em);
	}
	to {
		transform: rotate(360deg) translateY(-6.5em);
	}
}
@keyframes ballInnerShadow {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(-360deg);
	}
}
@keyframes ballOuterShadow {
	from {
		transform: rotate(20deg);
	}
	to {
		transform: rotate(-340deg);
	}
}
@keyframes ballTexture {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(50%);
	}
}
@keyframes trackCover {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>