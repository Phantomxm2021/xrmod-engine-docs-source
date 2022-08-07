import {
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  UnityIcon,
  CSharpIcon,
  VisualScript,
} from './icons';

const SECTIONS = [
  {
    name: 'iOS SDK',
    id: 'ios-sdk',
    icon: AppleIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Android SDK',
    id: 'android-sdk',
    icon: AndroidIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Flutter SDK',
    id: 'flutter-sdk',
    icon: FlutterIcon,
    section: 'mobile-sdk',
  },  
  {
    name: 'Unity SDK',
    id: 'unity-sdk',
    icon: UnityIcon,
    section: 'mobile-sdk',
  },  
  {
    name: 'Csharp API',
    id: 'open-api-pure-csharp',
    icon: CSharpIcon,
    section: 'open-api',
  },
  {
    name: 'Visual Scripting',
    id: 'open-api-visual-scripting',
    icon: VisualScript,
    section: 'open-api',
  },
];

const MULTI_SECTIONS = [
  [
    {
      name: 'Open API',
      section: 'open-api',
      description:
        'Use our pre-built UI components as a base to build on top of.',
    },
  ],
  [
    {
      name: 'Prebuilt SDK',
      section: 'mobile-sdk',
      description: 'Use our pre-built mobile SDK, ready to go',
    },
    
  ]
];

export { SECTIONS, MULTI_SECTIONS };
