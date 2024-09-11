(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{2108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/debug",function(){return t(6142)}])},6142:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var a=t(5893),o=t(2673),i=t(3393),r=t(2702);t(9128);var s=t(2643);let l=[{depth:2,value:"Using the sample app",id:"using-the-sample-app"},{depth:2,value:"HTTP playback doesn't work or  Black Screen on Release build (Android)",id:"http-playback-doesnt-work-or--black-screen-on-release-build-android"},{depth:2,value:"Decoder Issue (Android)",id:"decoder-issue-android"},{depth:2,value:"You cannot play clean content (all OS)",id:"you-cannot-play-clean-content-all-os"},{depth:2,value:"Check you can access to remote file",id:"check-you-can-access-to-remote-file"},{depth:2,value:"Check another player can read the content",id:"check-another-player-can-read-the-content"},{depth:2,value:"You cannot play protected content (all OS)",id:"you-cannot-play-protected-content-all-os"},{depth:2,value:"Protected content gives error (token error / access forbidden)",id:"protected-content-gives-error-token-error--access-forbidden"},{depth:2,value:"I need to debug network calls but I don't see them in react native debugging tools",id:"i-need-to-debug-network-calls-but-i-dont-see-them-in-react-native-debugging-tools"},{depth:2,value:"Debug media3: build from media3 source",id:"debug-media3-build-from-media3-source"},{depth:3,value:"Configure player path",id:"configure-player-path"},{depth:3,value:"Enable building from source",id:"enable-building-from-source"},{depth:3,value:"Desugaring",id:"desugaring"},{depth:2,value:"It's still not working",id:"its-still-not-working"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",span:"span",strong:"strong",h3:"h3"},(0,s.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Debugging"}),"\n",(0,a.jsx)(n.p,{children:"This page describe useful tips for debugging and investigating issue in the package or in your application."}),"\n",(0,a.jsx)(n.h2,{id:"using-the-sample-app",children:"Using the sample app"}),"\n",(0,a.jsx)(n.p,{children:"This repository contains multiple a sample implementation in example folder.\nIt is always preferable to test behavior on a sample app than in a full app implementation.\nThe basic sample allow to test a lot of feature.\nTo use the sample you will need to do steps:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Clone this repository:  ",(0,a.jsx)(n.code,{children:" git clone git@github.com:TheWidlarzGroup/react-native-video.git"})]}),"\n",(0,a.jsxs)(n.li,{children:["Go to root folder and build it. It will generate a transpiled version of the package in lib folder: ",(0,a.jsx)(n.code,{children:"cd react-native-video && yarn && yarn build"})]}),"\n",(0,a.jsxs)(n.li,{children:["Go to the sample and install it: ",(0,a.jsx)(n.code,{children:"cd example/basic && yarn install"})]}),"\n",(0,a.jsxs)(n.li,{children:["Build it ! for android ",(0,a.jsx)(n.code,{children:"yarn android"})," for ios ",(0,a.jsx)(n.code,{children:"cd ios && pod install && cd .. && yarn ios"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"http-playback-doesnt-work-or--black-screen-on-release-build-android",children:"HTTP playback doesn't work or  Black Screen on Release build (Android)"}),"\n",(0,a.jsxs)(n.p,{children:["If your video work on Debug mode, but on Release you see only black screen, please, check the link to your video. If you use 'http' protocol there, you will need to add next string to your AndroidManifest.xml file. ",(0,a.jsx)(n.a,{href:"https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic",children:"Details here"})]}),"\n",(0,a.jsx)(n.pre,{"data-language":"xml","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"xml","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"application"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ..."})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"android"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"usesCleartextTraffic"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"true"'})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"decoder-issue-android",children:"Decoder Issue (Android)"}),"\n",(0,a.jsx)(n.p,{children:"Devices have a maximum of simultaneous possible playback. It means you have reach this limit. Exoplayer returns: 'Unable to instantiate decoder'"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"known issue"}),": This issue happen really often in debug mode."]}),"\n",(0,a.jsx)(n.h2,{id:"you-cannot-play-clean-content-all-os",children:"You cannot play clean content (all OS)"}),"\n",(0,a.jsx)(n.p,{children:"Here are the steps to consider before opening a ticket in issue tracker"}),"\n",(0,a.jsx)(n.h2,{id:"check-you-can-access-to-remote-file",children:"Check you can access to remote file"}),"\n",(0,a.jsx)(n.p,{children:"Ensure you can download to manifest / content file with a browser for example"}),"\n",(0,a.jsx)(n.h2,{id:"check-another-player-can-read-the-content",children:"Check another player can read the content"}),"\n",(0,a.jsxs)(n.p,{children:["Usually clear playback can be read with all Video player. Then you should ensure content can be played without any issue with another player (",(0,a.jsx)(n.a,{href:"https://www.videolan.org/vlc/",children:"VideoLan/VLC"})," is a good reference implementation)"]}),"\n",(0,a.jsx)(n.h2,{id:"you-cannot-play-protected-content-all-os",children:"You cannot play protected content (all OS)"}),"\n",(0,a.jsx)(n.h2,{id:"protected-content-gives-error-token-error--access-forbidden",children:"Protected content gives error (token error / access forbidden)"}),"\n",(0,a.jsx)(n.p,{children:"If content is protected with an access token or any other http header, ensure you can access to you data with a wget call or a rest client app. You need to provide all needed access token / authentication parameters."}),"\n",(0,a.jsx)(n.h2,{id:"i-need-to-debug-network-calls-but-i-dont-see-them-in-react-native-debugging-tools",children:"I need to debug network calls but I don't see them in react native debugging tools"}),"\n",(0,a.jsxs)(n.p,{children:["This is a react native limitation. React native tools can only see network calls done in JS.\nTo achieve that, you need to record network trace to ensure communications with server is correct.\n",(0,a.jsx)(n.a,{href:"https://www.charlesproxy.com/",children:"Charles proxy"})," or ",(0,a.jsx)(n.a,{href:"https://www.telerik.com/fiddler",children:"Fiddler"})," are a simple and useful tool to sniff all http/https calls.\nWith these tool you should be able to analyze what is going on with network. You will see all access to content and DRM, audio / video chunks, ..."]}),"\n",(0,a.jsx)(n.p,{children:"Then try to compare exchanges with previous tests you made."}),"\n",(0,a.jsx)(n.h2,{id:"debug-media3-build-from-media3-source",children:"Debug media3: build from media3 source"}),"\n",(0,a.jsx)(n.p,{children:"If you need to use a specific exoplayer version or patch default behavior, you may want to build from media3 source code."}),"\n",(0,a.jsx)(n.p,{children:"Building from media3 source is possible. You need to add 2 or 3 things in your app:"}),"\n",(0,a.jsx)(n.h3,{id:"configure-player-path",children:"Configure player path"}),"\n",(0,a.jsx)(n.p,{children:"You need to add following lines in settings.gradle to configure your media3 source path:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"gradle","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"gradle","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"gradle.ext.androidxMediaModulePrefix = 'media-'"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'apply from: file("../../../../media3/core_settings.gradle")'})})]})}),"\n",(0,a.jsx)(n.p,{children:"Of course, you should replace with media3 source path. Be carefull, you need to use the same version (or version with compatible api) that the package support."}),"\n",(0,a.jsx)(n.h3,{id:"enable-building-from-source",children:"Enable building from source"}),"\n",(0,a.jsx)(n.p,{children:"In your build.gradle file, add following setting:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"gradle","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"gradle","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"buildscript {"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    ext {"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        ..."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        buildFromMedia3Source = true"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        ..."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,a.jsx)(n.h3,{id:"desugaring",children:"Desugaring"}),"\n",(0,a.jsx)(n.p,{children:"to be able to link you may also need to enable coreLibraryDesugaringEnabled in your app."}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://developer.android.com/studio/write/java8-support?hl=fr#library-desugaring",children:"https://developer.android.com/studio/write/java8-support?hl=fr#library-desugaring"})," for more informations."]}),"\n",(0,a.jsx)(n.h2,{id:"its-still-not-working",children:"It's still not working"}),"\n",(0,a.jsx)(n.p,{children:"You can try to open a ticket now !"})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/other/debug.md",route:"/other/debug",timestamp:1725889613e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture",expo:"Expo",plugin:"Plugin (experimental)"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"expo",route:"/other/expo"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"},{kind:"MdxPage",name:"plugin",route:"/other/plugin"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Debugging",headings:l},pageNextRoute:"/other/debug",nextraLayout:i.ZP,themeConfig:r.Z};n.default=(0,o.j)(d)},2702:function(e,n,t){"use strict";var a=t(5893);t(7294),n.Z={head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"language",content:"en"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,a.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,a.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,a.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,a.jsx)("meta",{name:"og:image",content:"https://thewidlarzgroup.github.io/react-native-video/thumbnail.jpg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,a.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://thewidlarzgroup.github.io/react-native-video/thumbnail.jpg"}),(0,a.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,a.jsxs)("span",{children:["\uD83C\uDFAC ",(0,a.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,a.jsxs)("span",{children:["Built with ❤️ by ",(0,a.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=2108)}),_N_E=e.O()}]);