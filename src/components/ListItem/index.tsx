import * as React from 'react'

import { ListItem as StyledListItem, ListItemInfo } from './style'

interface IListItemProps {
    to: string
    info?: string[]
}

const ListItem: React.SFC<IListItemProps> = (props) => {
    const { info, children, ...rest } = props

    return (
        <StyledListItem {...rest}>
            {children}
            {info &&
                info.length > 0 && (
                    <ListItemInfo>
                        Exercises:{' '}
                        {info &&
                            info.map((item, index) => {
                                if (info && info.length === index + 1) {
                                    return item
                                }
                                return `${item}, `
                            })}
                    </ListItemInfo>
                )}
        </StyledListItem>
    )
}

export default ListItem
