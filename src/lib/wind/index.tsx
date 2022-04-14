import { ElementType, forwardRef, ReactElement } from 'react'

// from storybook
const domElements = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr', // SVG
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
] as const

// type HTMLProps<Key> = Key extends keyof JSX.IntrinsicElements
//   ? JSX.IntrinsicElements[Key]
//   : { [K in never]: never }

type EvaluateProps<Variants extends WindVariants> = {
  [Prop in keyof Variants]: Variants[Prop] extends Record<string, string>
    ? keyof Variants[Prop]
    : Variants[Prop] extends (...args: any) => any
    ? Parameters<Variants[Prop]>[0]
    : never
}

type GetIntersectionKeys<T, K extends keyof any> = {
  [k in keyof T]: K extends k ? K : never
}[keyof T]

type GetOptionalProps<Props, DefaultProps> = Partial<
  Pick<Props, GetIntersectionKeys<Props, keyof DefaultProps>>
>

type EvaluatePropsWithDefaultVariants<
  Variants extends WindVariants,
  DefaultVariants extends GetDefaultVariants<Variants>,
> = Omit<EvaluateProps<Variants>, keyof DefaultVariants> &
  GetOptionalProps<EvaluateProps<Variants>, DefaultVariants>

type ClassNameFunction = (value: any, props: any, variants: any) => string
type WindVariants = Record<string, Record<string, string> | ClassNameFunction>

interface WindConfig<Variants extends WindVariants, DefaultVariants> {
  className?: string
  variants?: Variants
  defaultVariants?: DefaultVariants
}

type GetDefaultVariants<Variants extends WindVariants> = Partial<
  Record<keyof Variants, any>
>

interface WindComponent<
  DefaultAs extends ElementType,
  Variants extends WindVariants,
  DefaultVariants,
> {
  <As extends ElementType = DefaultAs>(
    props: WindProps<As, Variants, DefaultVariants>,
  ): ReactElement<any, any>

  displayName?: string | undefined
}

type InferProps<T> = T extends ElementType<infer Props> ? Props : T

type WindProps<
  As extends ElementType,
  Variants extends WindVariants,
  DefaultVariants,
> = { as?: As } & Omit<
  InferProps<
    As extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[As] : As
  >,
  keyof Variants | 'as'
> &
  EvaluatePropsWithDefaultVariants<Variants, DefaultVariants>

interface WindFunction {
  <
    DefaultAs extends ElementType,
    // eslint-disable-next-line @typescript-eslint/ban-types
    Variants extends WindVariants = {},
    // eslint-disable-next-line @typescript-eslint/ban-types
    DefaultVariants extends GetDefaultVariants<Variants> = {},
  >(
    component: DefaultAs,
    config: WindConfig<Variants, DefaultVariants>,
  ): WindComponent<DefaultAs, Variants, DefaultVariants>
}

type Wind = WindFunction & {
  [DefaultAs in keyof JSX.IntrinsicElements]: <
    // eslint-disable-next-line @typescript-eslint/ban-types
    Variants extends WindVariants = {},
    // eslint-disable-next-line @typescript-eslint/ban-types
    DefaultVariants extends GetDefaultVariants<Variants> = {},
  >(
    className: string,
    config?: Omit<WindConfig<Variants, DefaultVariants>, 'className'>,
  ) => WindComponent<DefaultAs, Variants, DefaultVariants>
}

const wind: Wind = function <
  Props,
  DefaultAs extends ElementType<Props>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Variants extends WindVariants = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  DefaultVariants extends GetDefaultVariants<Variants> = {},
>(
  component: DefaultAs,
  {
    className: defaultClassName,
    variants,
    defaultVariants,
  }: WindConfig<Variants, DefaultVariants>,
): WindComponent<DefaultAs, Variants, DefaultVariants> {
  const overrideVariantProps = variants
    ? Object.fromEntries(Object.keys(variants).map((key) => [key, undefined]))
    : {}
  const Component = <As extends ElementType>(
    { as: asProp, ...props }: WindProps<As, Variants, DefaultVariants>,
    ref: any,
  ): ReactElement<any, any> => {
    const Tag = (asProp || component) as ElementType
    return (
      <Tag
        {...props}
        // remove all variants props if the component is a tag name
        {...(typeof component === 'string' ? overrideVariantProps : {})}
        ref={ref}
        className={
          evaluateClassName(
            { ...defaultVariants, ...props },
            variants || {},
            defaultClassName,
          ) || undefined
        }
      />
    )
  }

  if (typeof component === 'string') {
    return forwardRef(Component) as any as WindComponent<
      DefaultAs,
      Variants,
      DefaultVariants
    >
  }

  return Component as WindComponent<DefaultAs, Variants, DefaultVariants>
} as Wind

domElements.forEach(
  (domElement) =>
    (wind[domElement] = <Variants extends WindVariants, DefaultVariants>(
      className: string,
      config?: Omit<WindConfig<Variants, DefaultVariants>, 'className'>,
    ) => wind(domElement, { ...config, className })),
)

const evaluateClassName = (
  props: Record<string, any>,
  variants: WindVariants,
  defaultClassName = '',
): string => {
  const classNames = [defaultClassName, props.className || '']

  Object.keys(variants).forEach((key) => {
    const variant = variants[key]

    if (typeof variant === 'function') {
      classNames.push(variant(props[key], props, variants))
    } else {
      classNames.push(variant[props[key]])
    }
  })

  return classNames.filter(Boolean).join(' ')
}

export default wind

// const sizes = {
//   small: 'text-sm',
//   default: '',
// } as const

// function group<T>(
//   record: T,
//   keys: string[],
//   defaultValue: string,
// ): (value: keyof T, props: any, variants: any) => string {
//   return (value, props, variants) => {
//     const result = [record[value]]

//     keys.forEach((key) => {
//       if (props[key] === defaultValue) {
//         result.push(variants[key][value])
//       }
//     })

//     return result.join(' ')
//   }
// }

// const Anchor = wind(
//   'a',
//   {
//     color: {
//       blue: 'bg-blue-500 hover:',
//     },
//     size: group(sizes, ['textSize'], 'default'),
//     textSize: {
//       default: '',
//       small: 'text-sm',
//     },
//     isActive(value: boolean) {
//       return value ? 'ew' : 'bg-primary'
//     },
//   },
//   {
//     className: 'teste',
//     textSize: 'default',
//     size: 'default',
//     isActive: false,
//   },
// )
