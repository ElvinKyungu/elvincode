import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import { ref, defineComponent, watch, mergeProps, unref, useSSRContext, onMounted, onUnmounted, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useRouter, RouterView, createRouter, createWebHistory } from "vue-router";
import gsap, { gsap as gsap$1 } from "gsap";
import { useHead } from "@unhead/vue";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const isLoading = ref(false);
function useLoader() {
  return {
    isLoading,
    showLoader: () => isLoading.value = true,
    hideLoader: () => isLoading.value = false
  };
}
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const router2 = useRouter();
    const { isLoading: isLoading2, showLoader, hideLoader } = useLoader();
    watch(router2.currentRoute, (to, from) => {
      showLoader();
      setTimeout(() => {
        gsap.to(".loader", {
          opacity: 0,
          duration: 0.9,
          onComplete: () => {
            hideLoader();
            gsap.set(".loader", { opacity: 1 });
          }
        });
      }, 1e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-poppins" }, _attrs))} data-v-9be42ff4>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-9be42ff4"]]);
const _sfc_main$s = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconBars.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const IconBars = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$r = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconClose.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$q = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    color: "#000000",
    fill: "none"
  }, _attrs))}><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5"></path><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconInstagram.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const IconInstagram = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$p = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    color: "#000000",
    fill: "none"
  }, _attrs))}><path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconX.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const IconX = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$o = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconArrowGrowUp.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const IconArrowGrowUp = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$n = {};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconSearch.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const gsapImg = "/assets/gsap-DDgLQMet.jpg";
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "HoverPlaces",
  __ssrInlineRender: true,
  setup(__props) {
    const listContainer1 = ref(null);
    const listContainer2 = ref(null);
    const listContainer3 = ref(null);
    onMounted(() => {
      var _a, _b, _c;
      if (listContainer1.value) {
        gsap$1.from((_a = listContainer1.value) == null ? void 0 : _a.children, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
      if (listContainer2.value) {
        gsap$1.from((_b = listContainer2.value) == null ? void 0 : _b.children, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
      if (listContainer3.value) {
        gsap$1.from((_c = listContainer3.value) == null ? void 0 : _c.children, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out"
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 max-w-7xl mx-auto flex justify-between" }, _attrs))}><ul class="space-y-5 flex flex-col w-full"><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Panoramic Viewpoint</p><p class="opacity-90">Best place</p></div></div></li><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Temples and Shrines</p><p class="opacity-90">Best place to pray</p></div></div></li></ul><ul class="space-y-5 flex flex-col w-full"><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Capsule Hotels</p><p class="opacity-90">Unique Accommodations</p></div></div></li><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Park Hyatt Tokyo</p><p class="opacity-90">When you want to sleep</p></div></div></li></ul><ul class="space-y-5 flex flex-col w-full"><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Tokyo of night</p><p class="opacity-90">Tokyo is also the night life</p></div></div></li><li class="flex gap-3 cursor-pointer"><div class="app-result"><img${ssrRenderAttr("src", unref(gsapImg))} class="w-16 rounded-xl object-cover h-16 shrink-0"><div class="w-full flex flex-col items-start"><p class="text-lg">Tokyo Cuisine Palace</p><p class="opacity-90">Best food</p></div></div></li></ul></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HoverPlaces.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(false);
    ref(false);
    ref(null);
    ref(null);
    onUnmounted(() => {
    });
    const menuItems = [
      { name: "Home", route: "/" },
      { name: "Components", route: "/" },
      { name: "About", route: "/about" },
      { name: "Experiences", route: "/" },
      { name: "Articles", route: "/" },
      { name: "Conferences", route: "/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-097dfd73><nav class="" data-v-097dfd73><ul class="fixed px-5 md:px-20 bg-white shadow-md backdrop-blur-sm items-center w-full flex justify-between py-3 space-x-5 z-header" data-v-097dfd73><li class="cursor-pointer" data-v-097dfd73>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "text-3xl text-green-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Elvin Code`);
          } else {
            return [
              createTextVNode("Elvin Code")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-097dfd73><ul class="flex space-x-10" data-v-097dfd73><li class="cursor-pointer hidden md:flex" data-v-097dfd73><ul class="flex space-x-7 text-lg" data-v-097dfd73><li class="border-b-4 py-3 border-transparent hover:border-b-black transition" data-v-097dfd73> Components </li><li class="border-b-4 py-3 border-transparent hover:border-b-black transition" data-v-097dfd73> Recents articles </li><li class="border-b-4 py-3 border-transparent" data-v-097dfd73>`);
      _push(ssrRenderComponent(IconInstagram, { class: "w-7 h-7 relative z-10" }, null, _parent));
      _push(`</li><li class="border-b-4 py-3 border-transparent" data-v-097dfd73>`);
      _push(ssrRenderComponent(IconX, { class: "w-7 h-7 relative z-10" }, null, _parent));
      _push(`</li></ul></li><li class="md:border-b-4 cursor-pointer py-3 border-transparent" data-v-097dfd73>`);
      _push(ssrRenderComponent(IconBars, { class: "text-black w-8 h-8 relative z-10" }, null, _parent));
      _push(`</li></ul></li></ul></nav><div data-v-097dfd73><div class="container container--menu bg-white/40 h-full backdrop-blur-md flex justify-between px-5 md:px-10 lg:px-20 py-10" data-v-097dfd73><div class="sidebar" data-v-097dfd73><button class="sidebar__menu-trigger menu__right" data-v-097dfd73>`);
      _push(ssrRenderComponent(IconClose, { class: "w-10 h-10" }, null, _parent));
      _push(`</button></div><div class="menu__layout" data-v-097dfd73><ul class="menu__left text-xl space-y-5" data-v-097dfd73><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<li class="menu-item" data-v-097dfd73>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: item.route,
          class: "flex gap-4 items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="icon" data-v-097dfd73${_scopeId}>`);
              _push2(ssrRenderComponent(IconArrowGrowUp, { class: "text-black" }, null, _parent2, _scopeId));
              _push2(`</span> ${ssrInterpolate(item.name)}`);
            } else {
              return [
                createVNode("span", {
                  ref_for: true,
                  ref: "icons",
                  class: "icon"
                }, [
                  createVNode(IconArrowGrowUp, { class: "text-black" })
                ], 512),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></header>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/Header.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-097dfd73"]]);
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex w-full mt-20 px-5 md:px-20" }, _attrs))}><div class="w-full mx-auto p-4"><div class="sm:flex sm:items-center sm:justify-between">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "flex items-center mb-5 md:mb-0 rtl:space-x-reverse text-3xl md:text-5xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Elvin Code `);
      } else {
        return [
          createTextVNode(" Elvin Code ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0"><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/about",
    class: "hover:underline me-4 md:me-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "hover:underline me-4 md:me-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Components`);
      } else {
        return [
          createTextVNode("Components")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "hover:underline me-4 md:me-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Experiences`);
      } else {
        return [
          createTextVNode("Experiences")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "hover:underline me-4 md:me-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Articles`);
      } else {
        return [
          createTextVNode("Articles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "hover:underline me-4 md:me-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Conferences`);
      } else {
        return [
          createTextVNode("Conferences")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><hr class="my-6 border-gray-300 sm:mx-auto lg:my-8"><span class="block text-sm sm:text-center"> © 2024 `);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Elvin Code `);
      } else {
        return [
          createTextVNode(" Elvin Code ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` All Rights Reserved. </span></div></footer>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/Footer.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TextScroll",
  __ssrInlineRender: true,
  setup(__props) {
    const rows = ref([]);
    const tagRows = [
      [
        { text: "Elvin", styleClass: "" },
        { text: "<Code />", styleClass: "-stroke" },
        { text: "Elvin", styleClass: "" },
        { text: "<Code  />", styleClass: "-stroke" },
        { text: "Elvin", styleClass: "" },
        { text: "<Code  />", styleClass: "-stroke" }
      ]
    ];
    let lastScrollTop = 0;
    onMounted(() => {
      rows.value.forEach((row, i) => {
        const rowWidth = row.getBoundingClientRect().width;
        const rowItemWidth = row.children[0].getBoundingClientRect().width;
        const initialOffset = 2 * rowItemWidth / rowWidth * 100 * -1;
        gsap$1.set(row, { xPercent: `${initialOffset}` });
        const duration = 5 * (i + 1);
        const tl = gsap$1.timeline({ repeat: -1 });
        tl.to(row, { xPercent: 0, ease: "none", duration });
        window.addEventListener("scroll", () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            tl.reverse();
          } else {
            tl.play();
          }
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-scroll-container relative font-Dancing" }, _attrs))}><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="text-scroll-content py-10 mg:py-20 lg:py-28"><div class="text-scroll-items bg-gray-100 text-green-600" role="marquee"><!--[-->`);
      ssrRenderList(tagRows, (row, index) => {
        _push(`<div class="text-scroll-row"><!--[-->`);
        ssrRenderList(row, (item, idx) => {
          _push(`<div class="${ssrRenderClass([item.styleClass, "text-scroll-item"])}"><span>${ssrInterpolate(item.text)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TextScroll.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
function useTitleAnimation(titleRef, delay = 0.5) {
  const isVisible = ref(false);
  onMounted(() => {
    if (titleRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true;
            gsap.fromTo(
              titleRef.value,
              {
                y: 50,
                opacity: 0,
                clipPath: "inset(100% 0% 0% 0%)"
              },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.5,
                ease: "power4.out",
                delay
              }
            );
          }
        });
      });
      observer.observe(titleRef.value);
    }
  });
}
function useParagraphAnimation(paragraphRef, delay = 0.7) {
  const isVisible = ref(false);
  onMounted(() => {
    if (paragraphRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true;
            gsap.fromTo(
              paragraphRef.value,
              {
                y: 50,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power4.out",
                delay
              }
            );
          }
        });
      });
      observer.observe(paragraphRef.value);
    }
  });
}
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "WalletCardHome",
  __ssrInlineRender: true,
  setup(__props) {
    const titleRef1 = ref(null);
    const titleRef2 = ref(null);
    const textRef1 = ref(null);
    const textRef2 = ref(null);
    const textRef3 = ref(null);
    const textRef4 = ref(null);
    const paragraphRef1 = ref(null);
    const paragraphRef2 = ref(null);
    useTitleAnimation(titleRef1, 0.3);
    useTitleAnimation(titleRef2, 0.5);
    useParagraphAnimation(paragraphRef1, 0.5);
    useParagraphAnimation(paragraphRef2, 0.7);
    useTitleAnimation(textRef1, 0.5);
    useTitleAnimation(textRef2, 0.7);
    useTitleAnimation(textRef3, 0.7);
    useTitleAnimation(textRef4, 0.9);
    gsap$1.registerPlugin(ScrollTrigger);
    onMounted(() => {
      const sections = document.querySelectorAll(".animated-section");
      sections.forEach((section, index) => {
        gsap$1.fromTo(
          section,
          { x: index % 2 === 0 ? -450 : 450 },
          {
            x: 0,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top center",
              scrub: true
            }
          }
        );
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-5 md:px-20 lg:gap-20 gap-5 grid py-5 md:py-10 grid-cols-12 w-full min-h-[50rem] overflow-hidden mt-5 md:mt-10 lg:mt-28" }, _attrs))}><div class="animated-section bg-green-400 md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="relative z-20 text-black h-full"><div class="text-xs uppercase flex justify-between"><p>Your Vision</p><p>My Expertise</p></div><div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto"><h1 class="text-2xl md:text-3xl lg:text-5xl"> Let me bring your projects to life </h1><p class="mt-2 md:mt-10"> Together, we can transform your ideas into concrete, high-performance solutions. Whether it&#39;s creating modern interfaces or intuitive user experiences, I&#39;m with you every step of the way to bring your ambitions to life. </p></div><div class="md:bottom-5 rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto bg-black text-white cursor-pointer absolute p-5 md:p-5 right-[2.5%]"><div class="flex justify-between"><span class="text-sm md:text-sm">Start your project now</span>`);
      _push(ssrRenderComponent(IconArrowGrowUp, { class: "" }, null, _parent));
      _push(`</div></div></div></div><div class="animated-section bg-gray-100 md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="relative z-20 h-full"><div class="text-xs uppercase flex justify-between"><p>My Services</p><p>Let&#39;s Collaborate</p></div><div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto"><h1 class="text-2xl md:text-3xl lg:text-5xl -mt-10 md:mt-0"> What Do I Do? </h1><p class="mt-5 md:mt-10"> I specialize in creating stunning, user-centered web interfaces, Progressive Web Apps (PWAs), and dynamic animations using GSAP. I integrate seamless API connections, ensure excellent performance, and provide comprehensive SEO optimization to help you stand out. </p></div><div class="md:bottom-5 cursor-pointer rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto bg-white text-black absolute p-5 md:p-5 right-[2.5%]"><div class="flex justify-between"><span class="text-sm md:text-sm">Start your project</span>`);
      _push(ssrRenderComponent(IconArrowGrowUp, { class: "" }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WalletCardHome.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const vuejs = "data:image/png;base64,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";
const tailwindcss = "/assets/tailwindcss-BhwBzu3V.jpg";
const ts = "/assets/typescript-6qc-_j4H.png";
const unocss = "data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M117.444%20167.888C117.444%20140.273%20139.83%20117.888%20167.444%20117.888V117.888C195.058%20117.888%20217.444%20140.273%20217.444%20167.888V167.888C217.444%20195.502%20195.058%20217.888%20167.444%20217.888V217.888C139.83%20217.888%20117.444%20195.502%20117.444%20167.888V167.888Z'%20fill='%23858585'/%3e%3cpath%20d='M117.444%2053C117.444%2025.3858%20139.83%203%20167.444%203V3C195.058%203%20217.444%2025.3858%20217.444%2053V98C217.444%20100.761%20215.205%20103%20212.444%20103H122.444C119.683%20103%20117.444%20100.761%20117.444%2098V53Z'%20fill='%23CCCCCC'/%3e%3cpath%20d='M102%20167.888C102%20195.502%2079.6142%20217.888%2052%20217.888V217.888C24.3858%20217.888%202%20195.502%202%20167.888L2.00001%20122.888C2.00001%20120.126%204.23859%20117.888%207.00001%20117.888L97%20117.888C99.7614%20117.888%20102%20120.126%20102%20122.888L102%20167.888Z'%20fill='%234D4D4D'/%3e%3c/svg%3e";
const js = "/assets/js-BPgreag7.png";
const nuxt = "data:image/svg+xml,%3csvg%20width='520'%20height='347'%20viewBox='0%200%20520%20347'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M291.2%20346.667H483.6C489.74%20346.667%20495.616%20344.51%20500.933%20341.467C506.25%20338.424%20511.731%20334.604%20514.8%20329.333C517.869%20324.063%20520.003%20318.083%20520%20311.998C519.997%20305.913%20517.873%20299.936%20514.8%20294.668L384.8%2071.0667C381.732%2065.7973%20377.983%2061.9757%20372.667%2058.9333C367.351%2055.8909%20359.739%2053.7333%20353.6%2053.7333C347.461%2053.7333%20341.583%2055.8909%20336.267%2058.9333C330.951%2061.9757%20327.202%2065.7973%20324.133%2071.0667L291.2%20128.267L225.333%2017.3292C222.262%2012.0603%20218.517%206.50852%20213.2%203.46667C207.883%200.424818%20202.006%200%20195.867%200C189.727%200%20183.851%200.424818%20178.533%203.46667C173.216%206.50852%20167.738%2012.0603%20164.667%2017.3292L3.46667%20294.668C0.39343%20299.936%200.00267474%20305.913%203.31054e-06%20311.998C-0.00266812%20318.083%200.398057%20324.062%203.46667%20329.333C6.53528%20334.603%2012.0162%20338.424%2017.3333%20341.467C22.6504%20344.51%2028.5268%20346.667%2034.6667%20346.667H156C204.077%20346.667%20239.07%20325.1%20263.467%20284.267L322.4%20182L353.6%20128.267L448.933%20291.2H322.4L291.2%20346.667ZM154.267%20291.2H69.3333L195.867%2072.8L260%20182L217.518%20256.056C201.317%20282.551%20182.845%20291.2%20154.267%20291.2Z'%20fill='%2300DC82'/%3e%3c/svg%3e";
const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconRight.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const IconRight = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$g = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconHeart.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const IconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "HeartAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    const hearts = Array.from({ length: 10 }, (_, i) => i + 1);
    const heartRefs = ref([]);
    onMounted(() => {
      heartRefs.value = hearts.map((_, index) => document.querySelector(`.heart-animation-${index + 1}`));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-50 flex right-3 absolute top-0" }, _attrs))}><button class="rounded-full bg-black/20 p-2">`);
      _push(ssrRenderComponent(IconHeart, { class: "heart-icon text-white" }, null, _parent));
      _push(`</button><!--[-->`);
      ssrRenderList(unref(hearts), (index) => {
        _push(`<div class="${ssrRenderClass(`heart-animation heart-animation-${index}`)}">`);
        _push(ssrRenderComponent(IconHeart, { class: "heart-icon" }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HeartAnimation.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconPincel.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const IconPencil = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "PlacesCardClickable",
  __ssrInlineRender: true,
  setup(__props) {
    const titleRef1 = ref(null);
    const titleRef2 = ref(null);
    const cardRef1 = ref(null);
    const cardRef2 = ref(null);
    const cardRef3 = ref(null);
    const imagesRef = ref(null);
    const paragraphRef1 = ref(null);
    const paragraphRef2 = ref(null);
    const paragraphRef3 = ref(null);
    const paragraphRef4 = ref(null);
    useTitleAnimation(titleRef1, 0.2);
    useTitleAnimation(titleRef2, 0.3);
    useParagraphAnimation(paragraphRef1, 0.2);
    useTitleAnimation(cardRef1, 0.4);
    useTitleAnimation(cardRef2, 0.5);
    useTitleAnimation(cardRef3, 0.7);
    useParagraphAnimation(paragraphRef2, 0.6);
    useParagraphAnimation(paragraphRef3, 0.7);
    useParagraphAnimation(paragraphRef4, 0.7);
    useParagraphAnimation(imagesRef, 0.5);
    const cardStack = [
      {
        componentName: "Vuejs",
        componentImage: vuejs
      },
      {
        componentName: "Nuxt ",
        componentImage: nuxt
      },
      {
        componentName: "TypeScript",
        componentImage: ts
      },
      {
        componentName: "Javascript",
        componentImage: js
      },
      {
        componentName: "Tailwindcss",
        componentImage: tailwindcss
      },
      {
        componentName: "GSAP",
        componentImage: gsapImg
      },
      {
        componentName: "UnoCSS",
        componentImage: unocss
      }
    ];
    const hearts = Array.from({ length: 10 }, (_, i) => i + 1);
    const heartRefs = ref([]);
    onMounted(() => {
      heartRefs.value = hearts.map((_, index) => document.querySelector(`.heart-animation-${index + 1}`));
    });
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-7 relative py-10 md:py-20 px-5 md:px-20" }, _attrs))}><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="col-span-12 md:col-span-6 relative z-30"><div class="flex flex-col justify-between w-full h-full"><h1 class="text-5xl"> Building Innovative Digital Experiences </h1><div class="grid my-10 md:mt-5 grid-cols-12 md:flex justify-between gap-2 md:gap-5 items-center"><p class="w-full col-span-8"> As a frontend developer, I craft sleek, interactive web applications, using Vue.js for its reactivity and simplicity to build precise, dynamic user experiences. </p><div class="h-[1px] col-span-4 bg-black w-full"></div></div></div></div><div class="col-span-12 lg:col-span-6 relative z-30"><div class="grid grid-cols-12 gap-5 p-5"><div class="col-span-2 hidden md:block"></div><div class="col-span-6 md:col-span-5 bg-black text-white p-5 h-32 rounded-md"><div class="flex justify-between w-full"><span>Mastering the art of Vue.js</span>`);
      _push(ssrRenderComponent(IconRight, { class: "text-white" }, null, _parent));
      _push(`</div></div><div class="col-span-6 md:col-span-5 bg-blue-500 text-white p-5 h-32 rounded-md"><div class="flex justify-between w-full"><span>TailwindCSS for responsive elegance</span>`);
      _push(ssrRenderComponent(IconRight, null, null, _parent));
      _push(`</div></div></div><div class="grid grid-cols-12 bg-gray-100 mt-5 p-5 rounded-lg md:p-5"><div class="text-lg uppercase col-span-2">My stack</div><div class="col-span-12 md:col-span-10"><section class="flex justify-center flex-col items-center w-full relative z-0"><div class="grid grid-cols-12 gap-5 relative w-full h-full"><div class="sticky col-span-12 md:col-span-6 overflow-hidden h-72 w-full"><div class="h-full w-full relative"><div class="absolute flex justify-between w-full"><button class="preview-button left-3 text-black z-40 absolute flex gap-2 bg-white/50 backdrop-blur-sm top-2 rounded-full border border-black px-5 py-1"><span class="text-sm">Preview</span>`);
      _push(ssrRenderComponent(IconArrowGrowUp, { class: "w-4 h-4 text-black" }, null, _parent));
      _push(`</button><div class="z-50 flex right-0 absolute top-2">`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(`</div></div><img${ssrRenderAttr("src", cardStack[0].componentImage)} alt="My tech stack" class="absolute object-cover bg-black h-72 w-full cursor-pointer rounded-2xl"></div></div><div class="col-span-12 md:col-span-6 md:ml-3"><!--[-->`);
      ssrRenderList(cardStack, (card, index) => {
        _push(`<div class="relative cursor-pointer"><div class="flex flex-col w-full bottom-16 text-black details gap-1"><div class="components-result"><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(IconPencil, null, null, _parent));
        _push(`<span class="">${ssrInterpolate(card.componentName)}</span></div><div class="flex items-center gap-3"><span class="components-link">see </span></div></div><hr></div></div>`);
      });
      _push(`<!--]--></div></div></section></div></div></div></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PlacesCardClickable.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    class: "block w-5 h-5 text-gray-400 mb-4",
    viewBox: "0 0 975.036 975.036"
  }, _attrs))}><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconCitation.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const IconCitation = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    userImage: String,
    userTitle: String,
    userText: String,
    userName: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full p-8 rounded shadow-md cursor-pointer bg-white text-gray-800 border border-gray-200" }, _attrs))}>`);
      _push(ssrRenderComponent(IconCitation, null, null, _parent));
      _push(`<p class="leading-relaxed text-xl mb-6">${ssrInterpolate(__props.userText)}</p><a class="inline-flex items-center"><img alt="testimonial"${ssrRenderAttr("src", __props.userImage)} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-4"><span class="title-font font-medium">${ssrInterpolate(__props.userName)}</span><span class="text-gray-800">${ssrInterpolate(__props.userTitle)}</span></span></a></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TestimonialCard.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AnimatedCard",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const titleRef = ref(null);
    const paragraphRef = ref(null);
    onMounted(() => {
      const images = document.querySelectorAll(".animate-img");
      const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.1 });
      tl.fromTo(
        images,
        {
          y: -200,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "elastic.out(0.4, 0.4)",
          stagger: {
            each: 0.2
          }
        }
      );
      gsap.fromTo(
        titleRef.value,
        {
          y: 50,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)"
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5
        }
      );
      gsap.fromTo(
        paragraphRef.value,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 1
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid relative z-40 md:gap-5 lg:gap-16 grid-cols-12 px-5 md:px-20 pt-36 md:pt-5 md:py-20 lg:py-36" }, _attrs))}><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="col-span-12 relative z-20 md:col-span-6 lg:py-10"><h2 class="text-3xl md:mt-5 md:text-4xl lg:text-6xl"> Hi, I&#39;m Elvin Kyungu, you can call me Elvin Code also ! </h2><p class="mt-12 text-lg"> I&#39;m a passionate Frontend Developer and i specialize in building modern, responsive, and dynamic web applications. My expertise includes Vue.js, Nuxt.js, and TailwindCSS, with a focus on creating elegant and performant user interfaces. Let&#39;s explore the possibilities together and build amazing projects. </p><button class="bg-black inline-flex gap-2 text-white py-4 px-5 mt-12 rounded-lg"> Learn more about my work `);
      _push(ssrRenderComponent(IconArrowGrowUp, null, null, _parent));
      _push(`</button></div><div class="relative z-20 col-span-12 md:col-span-6 overflow-hidden mt-10 pt-5 pb-16"><div class="flex flex-wrap gap-4 -space-x-24 justify-center md:w-[32rem] h-full mx-auto"><img${ssrRenderAttr("src", unref(vuejs))} alt="Vue.js logo" class="animate-img bg-black image-animate rotate-12"><img${ssrRenderAttr("src", unref(nuxt))} alt="Nuxt.js logo" class="animate-img bg-black image-animate -rotate-12"><img${ssrRenderAttr("src", unref(ts))} alt="TypeScript logo" class="animate-img bg-black image-animate rotate-6"><img${ssrRenderAttr("src", unref(js))} alt="JavaScript logo" class="animate-img image-animate -rotate-12"><img${ssrRenderAttr("src", unref(tailwindcss))} alt="TailwindCSS logo" class="animate-img image-animate object-cover"></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AnimatedCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0 = "/assets/elvin-CRrZ4aYA.png";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Elvin code - Frontend developer",
      meta: [
        {
          name: "description",
          content: "Website description"
        }
      ]
    });
    const titleRef1 = ref(null);
    const titleRef2 = ref(null);
    const titleRef3 = ref(null);
    const titleRef4 = ref(null);
    const paragraphRef = ref(null);
    const imageRef4 = ref(null);
    const testimonials = ref([
      {
        userImage: _imports_0,
        userText: "Exploring Tsukiji was a food lover's dream. The freshest sushi and seafood I've ever had, and the market atmosphere was bustling!",
        userName: "Alex Dubro",
        userTitle: "From England"
      },
      {
        userImage: _imports_0,
        userText: "Odaiba had a futuristic feel with its waterfront, giant Gundam statue and high-tech shopping malls. The sunset view from the Rainbow Bridge was magical.",
        userName: "Sarah Assina",
        userTitle: "From Canada"
      },
      {
        userImage: _imports_0,
        userText: "Ueno Park was a peaceful escape from the hustle and bustle of the city. The cherry blossoms were beautiful, and visiting the zoo was a fun way to spend the day.",
        userName: "Diego delafuente",
        userTitle: "From Spain"
      },
      {
        userImage: _imports_0,
        userText: "The view from Tokyo Skytree was breathtaking. Watching the city lights at night from this height is an unforgettable experience. A must-see!",
        userName: "Emman Levi",
        userTitle: "From Australia"
      },
      {
        userImage: _imports_0,
        userText: "The atmosphere at Senso-ji Temple was surreal. The vibrant red doors, incense and stunning architecture really made me feel connected to Japan's rich history.",
        userName: "Marc JC",
        userTitle: "From USA"
      },
      {
        userImage: _imports_0,
        userText: "Shibuya Crossing was incredible! The sheer number of people, the lights and the energy are something you have to experience in person. It's like stepping into a movie scene!",
        userName: "Laura Bent",
        userTitle: "From France"
      }
    ]);
    useParagraphAnimation(paragraphRef, 0.5);
    useTitleAnimation(titleRef1, 0.5);
    useTitleAnimation(imageRef4, 0.5);
    useTitleAnimation(titleRef2, 0.5);
    useTitleAnimation(titleRef3, 0.5);
    useTitleAnimation(titleRef4, 0.5);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<main class="relative"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><section class="grid relative z-40 grid-cols-12 px-5 md:px-20 py-5"><div class="col-span-12 md:col-span-6"><h2 class="text-5xl">Crafting the Future of Web Interfaces</h2></div><div class="col-span-12 md:col-span-6"><p class="text-lg md:text-xl"> As a frontend developer, I blend creativity with precision to build intuitive and dynamic web applications. From pixel-perfect designs to seamless user experiences, I turn ideas into interactive realities, using modern technologies like Vue.js, Nuxt.js, and TailwindCSS. My mission? Delivering fast, responsive, and aesthetically compelling solutions that make a lasting impact. </p></div></section>`);
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<div class="pt-20 px-5 md:px-20 relative z-10"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><h2 class="text-3xl md:text-4xl relative mb-10">Testimonials</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative"><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial, index) => {
        _push(ssrRenderComponent(_sfc_main$b, {
          key: index,
          class: "testimonial-card",
          userImage: testimonial.userImage,
          userText: testimonial.userText,
          userName: testimonial.userName,
          userTitle: testimonial.userTitle
        }, null, _parent));
      });
      _push(`<!--]--></div></div><section class="px-5 relative md:px-20 py-10 md:pt-56"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="grid grid-cols-12 gap-4 relative z-10"><div class="col-span-12 md:col-span-3 my-5 mt-2"><p class="h-[1px] bg-black"></p><p class="text-sm">Get in Touch to work with me</p></div><h1 class="col-span-12 md:col-span-9 text-2xl md:text-3xl lg:text-5xl"> Do you have any questions ? </h1></div><h1 class="relative z-10 text-2xl md:text-3xl lg:text-5xl"> or would you like to get in touch with me? I will take the time to answer you as soon as possible. </h1></section><section class="grid pb-20 grid-cols-12 gap-5 overflow-hidden px-5 relative md:px-20"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md"><div class="flex justify-center flex-col items-center space-y-3"><h1 class="text-xl">Phone number</h1><ul><li>+243 846899101</li><li>+243 995555480</li></ul></div></div><div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md"><div class="flex justify-center flex-col items-center space-y-3"><h1 class="text-xl">Mail adress</h1><ul><li>elvinkyungu.75@gmail.com</li></ul></div></div><div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md"><div class="flex justify-center flex-col items-center space-y-3"><h1 class="text-xl">Social network</h1><ul><li>Instagram</li><li>Linkedin</li><li>X (Twiter)</li></ul></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_1 = "/assets/elvin3-DMXs06A-.jpeg";
const _imports_2 = "/assets/elvin8-DRGyvN-_.jpeg";
const _imports_3 = "/assets/ek-BV3MeBNj.jpg";
const artile1 = "/assets/elvin11-DaENrCvK.png";
const conf15 = "/assets/elvin2-wisXEEoX.jpeg";
const conf17 = "/assets/elvin7-CoavyBk0.jpeg";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="flex flex-col justify-center pt-32" data-v-8a1ea0c5><section class="flex relative justify-center pt-5 z-50" data-v-8a1ea0c5><div class="absolute pl top-44" data-v-8a1ea0c5><div class="pl__outer-ring" data-v-8a1ea0c5></div><div class="pl__inner-ring" data-v-8a1ea0c5></div><div class="pl__track-cover" data-v-8a1ea0c5></div><div class="pl__ball" data-v-8a1ea0c5><div class="pl__ball-texture" data-v-8a1ea0c5></div><div class="pl__ball-outer-shadow" data-v-8a1ea0c5></div><div class="pl__ball-inner-shadow" data-v-8a1ea0c5></div><div class="pl__ball-side-shadows" data-v-8a1ea0c5></div></div></div><div class="bg-black/10 backdrop-blur-md ul p-16 rounded-full mt-10" data-v-8a1ea0c5><div class="avatar flex justify-center items-center" data-v-8a1ea0c5><div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2" data-v-8a1ea0c5><img${ssrRenderAttr("src", _imports_0)} class="rounded-full" data-v-8a1ea0c5></div></div></div></section><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]" data-v-8a1ea0c5></div><div class="text-center relative mt-10" data-v-8a1ea0c5><h1 class="text-xl md:text-3xl lg:text-5xl mb-10" data-v-8a1ea0c5> Hi, I&#39;m Elvin, but you can call me Elvin Code :) </h1><p class="text-lg md:text-xl text-center flex justify-center md:max-w-7xl mx-auto" data-v-8a1ea0c5> I&#39;m a frontend developer passionate about transforming ideas into sleek, intuitive digital experiences. With a deep love for remote work, I thrive in flexible environments where creativity and efficiency meet. I specialize in Vue.js </p></div><section class="overflow-hidden text-gray-700 relative z-50" data-v-8a1ea0c5><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]" data-v-8a1ea0c5></div><div class="px-5 py-2 mx-auto lg:pt-24 lg:px-20 relative pb-10" data-v-8a1ea0c5><h1 class="text-xl text-center md:text-3xl lg:text-5xl mb-10" data-v-8a1ea0c5> Gallery </h1><div class="flex flex-wrap -m-1 md:-m-2" data-v-8a1ea0c5><div class="flex flex-wrap w-1/2" data-v-8a1ea0c5><div class="w-1/2 p-1 md:p-2 h-96" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", _imports_1)} data-v-8a1ea0c5></div><div class="w-1/2 p-1 md:p-2 h-96" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", _imports_2)} data-v-8a1ea0c5></div><div class="w-full p-1 md:p-2 h-[40rem]" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", _imports_3)} data-v-8a1ea0c5></div></div><div class="flex flex-wrap w-1/2" data-v-8a1ea0c5><div class="w-full p-1 md:p-2 h-[40rem]" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", artile1)} data-v-8a1ea0c5></div><div class="w-1/2 p-1 md:p-2 h-[24rem]" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", conf15)} data-v-8a1ea0c5></div><div class="w-1/2 p-1 md:p-2 h-[24rem]" data-v-8a1ea0c5><img alt="gallery" class="img-gallery"${ssrRenderAttr("src", conf17)} data-v-8a1ea0c5></div></div></div></div></section></main>`);
      _push(ssrRenderComponent(Footer, { class: "relative z-50" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/about.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8a1ea0c5"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconStars.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconStars = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TouristCard",
  __ssrInlineRender: true,
  props: {
    image: {},
    title: {},
    price: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(mergeProps({ class: "p-2 relative overflow-hidden group" }, _attrs))} data-v-18409fac><div class="relative overflow-hidden w-full h-64 rounded-lg" data-v-18409fac><img${ssrRenderAttr("src", _ctx.image)} class="transition-transform duration-500 transform group-hover:scale-140 rounded-lg w-full h-full object-cover cursor-pointer"${ssrRenderAttr("alt", _ctx.title)} data-v-18409fac></div><figcaption class="top-5 right-5 absolute" data-v-18409fac>`);
      _push(ssrRenderComponent(IconHeart, null, null, _parent));
      _push(`</figcaption><figcaption class="outside" data-v-18409fac><div class="flex justify-between px-2 mt-5" data-v-18409fac><h3 class="text-lg" data-v-18409fac>${ssrInterpolate(_ctx.title)}</h3></div></figcaption><div class="flex items-center" data-v-18409fac>`);
      _push(ssrRenderComponent(IconStars, { class: "text-yellow-500" }, null, _parent));
      _push(`<span data-v-18409fac>4.7</span></div><p class="px-2 text-sm text-gray-500" data-v-18409fac>${ssrInterpolate(_ctx.price)}</p></figure>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TouristCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TouristCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-18409fac"]]);
const conf1 = "/assets/conf1-1O96jfed.jpeg";
const conf2 = "/assets/conf2-CgxYwGVV.jpeg";
const conf3 = "/assets/conf3-DEaBFO9n.jpg";
const conf4 = "/assets/conf4-CrlvjQdW.jpg";
const conf5 = "/assets/conf5-BD0FX5LB.jpg";
const conf6 = "/assets/conf6-C6RarJgG.png";
const conf7 = "/assets/conf7-DbQ7NDy2.jpg";
const conf8 = "/assets/conf8-BXet87af.jpg";
const conf9 = "/assets/conf9-BJlZHc6q.jpeg";
const conf10 = "/assets/conf10-BHrYGMaP.png";
const conf12 = "/assets/conf12-ifHNdFwy.jpg";
const conf13 = "/assets/conf13-3i4C7D1L.jpeg";
const conf14 = "/assets/conf14-sDp1wEWi.jpg";
const conf16 = "/assets/elvin10-BJQMuU7r.jpeg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "conferences",
  __ssrInlineRender: true,
  setup(__props) {
    const titleRef1 = ref(null);
    const titleRef2 = ref(null);
    const titleRef3 = ref(null);
    const titleRef4 = ref(null);
    const cards1Ref1 = ref(null);
    const cards1Ref2 = ref(null);
    const cards1Ref3 = ref(null);
    const cards1Ref4 = ref(null);
    useTitleAnimation(titleRef1, 0.2);
    useTitleAnimation(titleRef2, 0.2);
    useTitleAnimation(titleRef3, 0.2);
    useTitleAnimation(titleRef4, 0.3);
    useParagraphAnimation(cards1Ref1, 0.5);
    useParagraphAnimation(cards1Ref2, 0.5);
    useParagraphAnimation(cards1Ref3, 0.5);
    useParagraphAnimation(cards1Ref4, 0.5);
    const conferences = [
      {
        img: conf15,
        title: "A passion for tech as a lever for a promising professional future, both individually and collectively",
        price: 2024
      },
      {
        img: conf16,
        title: "Community development drives strong growth in Lush's tech ecosystem",
        price: 2022
      },
      {
        img: conf17,
        title: "Economic, environmental and social sustainability",
        price: 2023
      },
      {
        img: conf1,
        title: "Concours solution",
        price: 2024
      },
      {
        img: conf2,
        title: "Devfest student edition",
        price: 2023
      },
      {
        img: conf3,
        title: "Code fiesta 2023",
        price: 2023
      },
      {
        img: conf4,
        title: "Soft Day 2024",
        price: 2024
      },
      {
        img: conf5,
        title: "Evangelization tour, MLSA community at University of Lubumbashi",
        price: 2024
      },
      {
        img: conf6,
        title: "Frontend web development contest",
        price: 2022
      },
      {
        img: conf7,
        title: "Artificial intelligence in the DRC: opportunities and challenges",
        price: 2023
      },
      {
        img: conf8,
        title: "Young people in digital",
        price: 2022
      },
      {
        img: conf9,
        title: "Introduction to the developer professions",
        price: 2023
      },
      {
        img: conf10,
        title: "Essential computer skills.",
        price: 2024
      },
      // {
      //   img: conf11,
      //   title: "Green space",
      //   price: 0,
      //   notation: 'Free'
      // },
      {
        img: conf12,
        title: "Google IO extend",
        price: 2023
      },
      {
        img: conf13,
        title: "Devfest Google Developer Group Lubumbashi",
        price: 2024
      },
      {
        img: conf14,
        title: "Devfest GDG Lubumbashi",
        price: 2023
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, { class: "header w-full h-full" }, null, _parent));
      _push(`<main class="w-full relative px-5 md:px-20 py-10 md:py-20 lg:py-28"><div class="mt-20 relative w-full h-[30vh]"><div class="absolute w-full h-full bg-black/50 z-40 rounded-xl"></div><img${ssrRenderAttr("src", unref(conf12))} class="rounded-xl absolute w-full h-full z-20 object-cover" alt=""><h1 class="px-5 lg:px-10 font-light relative text-center z-40 flex h-full w-full items-center justify-center text-3xl text-white"> One of my greatest passions outside of coding is clearly sharing knowledge. It&#39;s something that really gets me going, and I do it every chance I get at tech conferences. </h1></div><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"></div><div class="relative"><h2 class="pt-10 text-3xl md:text-5xl relative z-10 my-10"> Conference speaker </h2><div class="grid relative md:gap-10 z-40 grid-cols-12"><!--[-->`);
      ssrRenderList(conferences, (attraction, index) => {
        _push(`<div class="col-span-12 md:col-span-4 lg:col-span-3">`);
        _push(ssrRenderComponent(TouristCard, {
          image: attraction.img,
          title: attraction.title,
          price: attraction.price
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/conferences.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "History",
  __ssrInlineRender: true,
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      default: () => []
    },
    isLast: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "bg-black/10": __props.isActive }, "flex flex-wrap -m-2 cursor-pointer hover:bg-black/10 transition rounded-lg"]
      }, _attrs))}><div class="pb-10"><div class="flex flex-col items-center justify-between h-full"><div class="block pb-4"><div class="flex items-center justify-center w-10 h-10 border border-neutral-300 rounded-full">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        _push(`<span class="text-lg font-semibold">${ssrInterpolate(__props.date)}</span>`);
      }, _push, _parent);
      _push(`</div></div>`);
      if (!__props.isLast) {
        _push(`<div class="h-full border border-dashed border-gray-500"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex-1 p-2"><h3 class="font-heading mb-0.5 text-lg font-light"><span class="font-extralight text-base">${ssrInterpolate(__props.date)}</span> <br> ${ssrInterpolate(__props.title)}</h3>`);
      if (__props.description.length) {
        _push(`<ul class="flex mb-7 items-center flex-wrap gap-2 mt-3"><!--[-->`);
        ssrRenderList(__props.description, (desc) => {
          _push(`<li class="relative overflow-hidden tag flex items-center text-sm font-light"><span class="block w-full">${ssrInterpolate(desc)}</span><span class="block w-full h-full absolute top-2 opacity-0">${ssrInterpolate(desc)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/experiences/History.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const experiences = [
  {
    date: "July - October",
    title: "Efficient Outsource SRL",
    description: [
      "The economic boom from the 1960s to the 1990s turned Tokyo into a global metropolis and a major financial center. Today, Tokyo is one of the world’s most influential cities."
    ],
    isLast: false
  },
  {
    date: "March 2024 - May 2024",
    title: "Atlantic Zone",
    description: [
      "The Meiji Restoration in 1868 marked the start of modernization. The Great Kanto Earthquake in 1923 devastated the city, followed by destruction during World War II (1939-1945). Reconstruction was completed in the 1950s."
    ],
    isLast: false
  },
  {
    date: "July 2023 - April 2024",
    title: "Soixante Circuits",
    description: [
      'During the Edo period (1603-1868), Tokyo, then called Edo, transformed from a small fishing village into Japan’s political center. At the end of the Tokugawa shogunate in 1868, the city was renamed Tokyo, meaning "Eastern Capital."'
    ],
    isLast: false
  },
  {
    date: "January 2024 - June 2023",
    title: "Bayamo",
    description: [
      "In 1868, during the Meiji Restoration, Emperor Meiji moved the capital from Kyoto to Edo, renaming it Tokyo, which means 'Eastern Capital'. This move symbolized the beginning of Japan's modernization and the centralization of political power in Tokyo."
    ]
  },
  {
    date: "November 2022 - March 2023",
    title: "Lushitrap",
    description: [
      "In 1868, during the Meiji Restoration, Emperor Meiji moved the capital from Kyoto to Edo, renaming it Tokyo, which means 'Eastern Capital'. This move symbolized the beginning of Japan's modernization and the centralization of political power in Tokyo."
    ]
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HistoryContent",
  __ssrInlineRender: true,
  props: {
    historyContent: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.historyContent, (history, index) => {
        _push(`<div class="mt-5"><div class="flex gap-4"><img${ssrRenderAttr("src", history.img)} class="w-28 h-20" alt=""><div><h3 class="">${ssrInterpolate(history.title)}</h3><h3 class="text-sm">${ssrInterpolate(history.description)}</h3><div class="flex justify-end w-full"><button class="flex py-2 px-5 bg-black/10 mt-5 rounded-full">Read more</button></div></div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/experiences/HistoryContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HistoryDetail",
  __ssrInlineRender: true,
  props: {
    experiences: {}
  },
  setup(__props) {
    const activeHistoryType = ref("articles");
    const historyContentRef = ref(null);
    const triggerAnimations = () => {
      gsap.from(".stagger-element", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out"
      });
      gsap.from(".stagger-element2", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
      if (historyContentRef.value) {
        gsap.fromTo(
          historyContentRef.value,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "quad.inOut" }
        );
      }
    };
    watch(activeHistoryType, async () => {
      await nextTick();
      triggerAnimations();
    });
    onMounted(() => {
      triggerAnimations();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "rightPanel",
        class: ""
      }, _attrs))} data-v-94a83fc1><div class="flex justify-between stagger-element my-5 lg:-mt-10" data-v-94a83fc1><img${ssrRenderAttr("src", _ctx.experiences.image)} alt="" class="rounded-lg h-96 w-full object-cover cursor-pointer" data-v-94a83fc1></div><div class="relative" data-v-94a83fc1><div class="grid grid-cols-12 stagger-element" data-v-94a83fc1><div class="col-span-12 md:col-span-6" data-v-94a83fc1></div><div class="col-span-12 md:col-span-6 relative" data-v-94a83fc1><div class="flex justify-end items-end gap-4 absolute -bottom-5 right-10" data-v-94a83fc1><div class="bg-yellow-500 stagger-element h-20 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-white stagger-element h-40 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-yellow-300 stagger-element h-56 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-green-600 stagger-element h-10 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-white stagger-element h-32 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-indigo-500 stagger-element h-20 z-50 w-2 rounded-full" data-v-94a83fc1></div><div class="bg-red-500 stagger-element h-40 z-50 w-2 rounded-full" data-v-94a83fc1></div></div></div></div></div><h1 class="mt-7 text-2xl stagger-element2" data-v-94a83fc1>${ssrInterpolate(_ctx.experiences.title)}</h1><p class="mt-5 stagger-element2 mb-10" data-v-94a83fc1>${ssrInterpolate(_ctx.experiences.description)}</p><div class="flex justify-start flex-wrap gap-5 mt-5 stagger-element2" data-v-94a83fc1><button class="${ssrRenderClass([activeHistoryType.value === "articles" ? "bg-black text-white" : "border", "py-2 px-5 rounded-full stagger-element2"])}" data-v-94a83fc1> Articles Similaires </button><button class="${ssrRenderClass([activeHistoryType.value === "personnages" ? "bg-black text-white" : "border", "py-2 px-5 rounded-full stagger-element2"])}" data-v-94a83fc1> Personnages Attachés </button></div><div class="mt-8" data-v-94a83fc1>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        historyContent: _ctx.experiences[activeHistoryType.value]
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/experiences/HistoryDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ExperiencesDetails = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-94a83fc1"]]);
const Efficient = {
  title: "Efficient Outsource SRL",
  image: artile1,
  description: "The Meiji Restoration in 1868 marked the start of modernization. The Great Kanto Earthquake in 1923 devastated the city, followed by destruction during World War II (1939-1945). Reconstruction was completed in the 1950s.",
  articles: [
    {
      img: artile1,
      title: "Meiji Restoration",
      description: "The Meiji Restoration of 1868 was a pivotal moment in Japanese history that led to the rapid modernization and industrialization of the country. It marked the end of feudal rule and the beginning of the imperial government."
    },
    {
      img: artile1,
      title: "Great Kanto Earthquake",
      description: "In 1923, the Great Kanto Earthquake struck Tokyo, causing massive destruction. It was a catalyst for urban redevelopment and modernization efforts in the subsequent decades."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Emperor Meiji",
      description: "Emperor Meiji played a crucial role in transforming Japan from a feudal society into a modern state. His leadership was instrumental during the Meiji Restoration, which shifted power from the shogunate to the emperor."
    },
    {
      img: artile1,
      title: "Tokugawa Yoshinobu",
      description: "The last shogun of the Tokugawa shogunate, Tokugawa Yoshinobu, played a significant role in the events leading to the Meiji Restoration. His resignation marked the end of centuries of feudal rule."
    }
  ]
};
const atlanticZone = {
  image: artile1,
  title: "Atlantic Zone",
  description: "In 1868, during the Meiji Restoration, Emperor Meiji moved the capital from Kyoto to Edo, renaming it Tokyo, which means 'Eastern Capital'. This move symbolized the beginning of Japan's modernization and the centralization of political power in Tokyo.",
  articles: [
    {
      img: artile1,
      title: "Capital Relocation",
      description: "Explores the strategic reasons behind moving the capital from Kyoto to Tokyo."
    },
    {
      img: artile1,
      title: "Political Modernization",
      description: "Examines how the move to Tokyo signaled a new era in Japan’s political landscape."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Emperor Meiji",
      description: "The role of Emperor Meiji in relocating the capital and initiating Tokyo's modernization."
    },
    {
      img: artile1,
      title: "Samurai Transition",
      description: "How the shift of the capital impacted the samurai and their societal role."
    }
  ]
};
const soixanteCircuits = {
  title: "Soixante Circuits",
  image: artile1,
  description: "The economic boom from the 1960s to the 1990s turned Tokyo into a global metropolis and a major financial center. Today, Tokyo is one of the world’s most influential cities.",
  articles: [
    {
      img: artile1,
      title: "Economic Miracle",
      description: "The post-war economic boom, often called the 'Japanese Economic Miracle,' transformed Tokyo into a thriving metropolis. This period saw rapid industrial growth, improved infrastructure, and increased global trade."
    },
    {
      img: artile1,
      title: "Urban Expansion",
      description: "During the economic growth period, Tokyo underwent significant urban expansion, with the construction of modern skyscrapers, bullet trains, and advanced urban planning to accommodate its growing population."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Prime Minister Eisaku Sato",
      description: "Under the leadership of Prime Minister Eisaku Sato, Tokyo experienced remarkable economic growth and hosted the 1964 Olympics, showcasing Japan's recovery and modernization."
    },
    {
      img: artile1,
      title: "Japanese Business Leaders",
      description: "Business leaders like Soichiro Honda and Akio Morita (founder of Sony) played crucial roles in Tokyo’s transformation into a global hub for technology and innovation during the economic boom."
    }
  ]
};
const bayamo = {
  image: artile1,
  title: "Bayamo",
  description: 'During the Edo period (1603-1868), Tokyo, then called Edo, transformed from a small fishing village into Japan’s political center. At the end of the Tokugawa shogunate in 1868, the city was renamed Tokyo, meaning "Eastern Capital."',
  articles: [
    {
      img: artile1,
      title: "Edo Period Transformation",
      description: "During the Edo period, Edo transformed into Japan's political center under the Tokugawa shogunate, growing in population and cultural influence."
    },
    {
      img: artile1,
      title: "Tokugawa Shogunate",
      description: "The Tokugawa shogunate ruled Japan for over 250 years, providing stability and a strict social order, which allowed Edo to flourish as a cultural and economic hub."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Tokugawa Ieyasu",
      description: "Tokugawa Ieyasu was the founder of the Tokugawa shogunate, establishing Edo as the administrative capital and laying the foundations for its growth into modern-day Tokyo."
    },
    {
      img: artile1,
      title: "Merchant Class in Edo",
      description: "The rising merchant class played a significant role in the economic prosperity of Edo, contributing to its cultural and financial growth during the shogunate era."
    }
  ]
};
const lushitrap = {
  image: artile1,
  title: "Lushitrap",
  description: 'During the Edo period (1603-1868), Tokyo, then called Edo, transformed from a small fishing village into Japan’s political center. At the end of the Tokugawa shogunate in 1868, the city was renamed Tokyo, meaning "Eastern Capital."',
  articles: [
    {
      img: artile1,
      title: "Edo Period Transformation",
      description: "During the Edo period, Edo transformed into Japan's political center under the Tokugawa shogunate, growing in population and cultural influence."
    },
    {
      img: artile1,
      title: "Tokugawa Shogunate",
      description: "The Tokugawa shogunate ruled Japan for over 250 years, providing stability and a strict social order, which allowed Edo to flourish as a cultural and economic hub."
    }
  ],
  personnages: [
    {
      img: artile1,
      title: "Tokugawa Ieyasu",
      description: "Tokugawa Ieyasu was the founder of the Tokugawa shogunate, establishing Edo as the administrative capital and laying the foundations for its growth into modern-day Tokyo."
    },
    {
      img: artile1,
      title: "Merchant Class in Edo",
      description: "The rising merchant class played a significant role in the economic prosperity of Edo, contributing to its cultural and financial growth during the shogunate era."
    }
  ]
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "size-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconCheck.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconCheck = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Experiences",
  __ssrInlineRender: true,
  setup(__props) {
    const titleRef1 = ref(null);
    const titleRef2 = ref(null);
    const titleRef3 = ref(null);
    const titleRef4 = ref(null);
    const imageRef4 = ref(null);
    const paragraphRef = ref(null);
    const cardsRef = ref(null);
    const cardHistory = ref(null);
    const cultureRefTitle = ref(null);
    const cultureCardsRef = ref(null);
    const economicTitleRef = ref(null);
    const economicParagraphRef = ref(null);
    const economicCardImgRef = ref(null);
    useTitleAnimation(titleRef1, 0.5);
    useTitleAnimation(imageRef4, 1);
    useTitleAnimation(titleRef2, 0.5);
    useTitleAnimation(titleRef3, 0.5);
    useTitleAnimation(titleRef4, 1);
    useTitleAnimation(cardsRef, 0.5);
    useTitleAnimation(cardHistory, 0.5);
    useParagraphAnimation(paragraphRef, 0.5);
    useTitleAnimation(cultureRefTitle, 0.3);
    useParagraphAnimation(cultureCardsRef, 0.4);
    useParagraphAnimation(economicTitleRef, 0.3);
    useParagraphAnimation(economicParagraphRef, 0.4);
    useParagraphAnimation(economicCardImgRef, 0.2);
    const selectedExperience = ref(Efficient);
    const activeExperienceTitle = ref(experiences[0].title);
    function getExperienceDetails(title) {
      switch (title) {
        case "Bayamo":
          return bayamo;
        case "Lushitrap":
          return lushitrap;
        case "Soixante Circuits":
          return soixanteCircuits;
        case "Atlantic Zone":
          return atlanticZone;
        case "Efficient Outsource SRL":
          return Efficient;
        default:
          return Efficient;
      }
    }
    function selectExperience(experienceDetail) {
      gsap.to(".experience-details", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete() {
          selectedExperience.value = experienceDetail;
          activeExperienceTitle.value = experienceDetail.title;
          gsap.to(".experience-details", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut"
          });
        }
      });
    }
    onMounted(() => {
      gsap.fromTo(".experience-details", {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, { class: "header w-full h-full" }, null, _parent));
      _push(`<main class="w-full relative px-5 md:px-20 py-10"><div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"></div><section class="py-4 flex justify-center w-full relative z-0 mt-20"><main class="px-5 w-full relative"><h1 class="my-10 text-5xl">Experiences</h1><div class="relative pb-7 rounded-xl"><div class="grid grid-cols-12 md:space-x-10 lg:space-x-20"><div class="col-span-12 md:col-span-6"><!--[-->`);
      ssrRenderList(unref(experiences), (experience, index) => {
        _push(ssrRenderComponent(_sfc_main$4, {
          key: index,
          date: experience.date,
          title: experience.title,
          description: experience.description,
          isLast: experience.isLast,
          onClick: ($event) => selectExperience(getExperienceDetails(experience.title))
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(IconCheck, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(IconCheck)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="col-span-12 md:col-span-6 rounded-lg py-5 -mt-10 relative">`);
      _push(ssrRenderComponent(ExperiencesDetails, {
        experiences: selectedExperience.value,
        class: "experience-details"
      }, null, _parent));
      _push(`</div></div></div></main></section></main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Experiences.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: _sfc_main$9
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/experiences",
      name: "experiences",
      component: _sfc_main
    },
    {
      path: "/conferences",
      name: "conferences",
      component: _sfc_main$5
    }
  ]
});
const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  (ctx) => {
    ctx.app.use(createPinia());
  }
);
export {
  createApp
};
