import { object, node, oneOfType, string } from 'prop-types'
import Header from 'components/header'
import Text from 'components/text'

const Paragraph = ({ children, title, titleProps, textProps }) => (
  <>
    <Header contentTitle {...{ ...titleProps }}>
      {title}
    </Header>
    <Text {...{ ...textProps }}>{children}</Text>
  </>
)

Paragraph.propTypes = {
  children: oneOfType([node, string]),
  title: string,
  titleProps: object,
  textProps: object,
}

export default Paragraph
