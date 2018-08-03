import * as React from 'react'

import Button from 'components/Button'
import Logo from 'media/logo.svg'
import {
    Offline as StyledOffline,
    OfflineLogo,
    OfflineText,
    OfflineButton
} from './style'

const Offline: React.SFC = () => (
    <StyledOffline>
        <OfflineLogo>
            <Logo />
        </OfflineLogo>
        <OfflineText>
            You need internet connection to continue using doroutine, refresh
            the page when you are connected to the internet.
        </OfflineText>
        <OfflineButton>
            <Button onClick={() => window.location.reload(true)}>
                Refresh
            </Button>
        </OfflineButton>
    </StyledOffline>
)

export default Offline
