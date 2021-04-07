import { arrayOf, node, oneOfType, string } from 'prop-types'

export const children = oneOfType([arrayOf(node), node, string])
