import React from 'react';

import MDXComponents from '@theme-original/MDXComponents';
import {CoverImage} from '@site/src/components/Coverimg';
import {CardUrlParse} from '@site/src/components/CardUrlParse'
import {Highlight} from '@site/src/components/Highlight'


export default {
  // 复用默认的映射
  ...MDXComponents,
  // 把 "highlight" 标签映射到我们的 <Highlight /> 组件！
  // `Highlight` 会收到在 MDX 中被传递给 `highlight` 的所有 props
  coverimg: CoverImage,
  highlight: Highlight,
  // cardurlparse: CardUrlParse,
};