import React, { PropTypes } from 'react'

import {
  PrimaryText,
  SecondaryText,
  SubtitleText,
  Base
} from '../index'


import RowImage from './RowImage'
import TouchableRowCell from './TouchableRowCell'

/**
 * Composes <TouchableRowCell> and includes shorthands for
 * displaying <PrimaryText>, <SecondaryText>, values, etc.
 */

const TouchableRow = ({
  primaryText,
  secondaryText,
  image,
  height,
  onPress,
  value,
  ...other
}) => {

  return (
    <TouchableRowCell
      height={height}
      py={2}
      onPress={onPress}
      {...other}>

      {image && (
        <RowImage mr={2} source={image} />
      )}

      <Base flex={1} row align='center' justify='space-between'>
        <Base flex={1}>
          {primaryText && (
            <PrimaryText numberOfLines={1}>{primaryText}</PrimaryText>
          )}
          {secondaryText && (
            <SecondaryText light numberOfLines={1}>{secondaryText}</SecondaryText>
          )}
        </Base>

        {value && (
          <PrimaryText light>{value}</PrimaryText>
        )}

      </Base>

    </TouchableRowCell>
  )
}

TouchableRow.displayName = 'TouchableRow'

TouchableRow.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
  image: PropTypes.object
}

export default TouchableRow
