import { array } from 'prop-types'
import Select from 'react-select'

const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(236, 236, 236, 0.1)',
    width: '100%',
    minHeight: '50px',
    border: '0',
    padding: '6px 24px',
    borderRadius: '4px',
    marginBottom: '2rem',
    fontFamily: 'lato',
    fontWeight: '400',
    fontSize: '14px',
    textAlign: 'left',
  }),
  placeholder: styles => ({
    ...styles,
    fontFamily: 'lato',
    fontWeight: '400',
    fontSize: '15px',
    opacity: '0.3 !important',
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(32,28,68, 0.8)',
  }),
  valueContainer: (styles) => ({
    ...styles,
    overflow: 'inherit',
    padding: '0 0 0 0',
  }),
  multiValue: (styles) => ({
    ...styles,
    color: '#fff',
    backgroundColor: 'transparent',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#fff',
    fontFamily: 'lato',
    fontWeight: '400',
    fontSize: '14px',
    padding: '0 0 0 0',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      color:'#aaa',
      backgroundColor: 'transparent',
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    const optionsStyles = {
      ...styles,
      ':active': {
        ...styles,
        backgroundColor: '#452643',
      },
    }
    if ( isFocused ) {
      optionsStyles.backgroundColor = '#0a0b24'
    } else if ( isSelected ) {
      optionsStyles.color = '#fff'
      optionsStyles.backgroundColor = 'transparent'
    }
    return optionsStyles
  },
}

const MultiSelect = ({ options, ...props}) => (
  <Select
    {...props}
    isMulti
    placeholder='What Commit resources have you seen prior to applying?'
    closeMenuOnSelect={false}
    styles={selectStyles}
    options={options}
    />
)

MultiSelect.propTypes = {
  options: array.isRequired,
}

export default MultiSelect