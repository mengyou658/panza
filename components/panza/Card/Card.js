import React, { PropTypes } from 'react'
import {
  Base,
  Image,
  Text,
  config
} from '../index'
import {
  StyleSheet
} from 'react-native'

/**
 * A very basic card header, which includes an optional avatar,
 * title, subtitle, and children
 * @composes Base, Image, Text
 */

export const CardHeader = ({
  avatar,
  title,
  subtitle,
  children,
  ...other
}) => (
  <Base p={1} {...other}>
    {avatar && (
      typeof avatar === 'string'
        ? <Image width={40} height={40} circular />
        : avatar
    )}
    <Base flex={1}>
      {title && (
        typeof title === 'string'
          ? <Text bold>{title}</Text>
          : title
      )}
      {subtitle && (
        typeof subtitle === 'string'
          ? <Text light small>{subtitle}</Text>
          : subtitle
      )}
    </Base>
    <Base flex={0}>
      {children}
    </Base>
  </Base>
)

CardHeader.propTypes = {
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.node
}


/**
 * A very basic Card wrapper
 * @composes Base
 */

const Card = ({
  children,
  ...other
}, { panza }) => {
  const { borderColor } = { ...config, ...panza }
  return (
    <Base mt={1} baseStyle={[ { borderColor }, styles.card]} {...other}>
      {children}
    </Base>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

const styles = StyleSheet.create({
  card: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})
