import * as React from 'react'

import LogoFullSvg from 'media/logo-full.svg'

import {
    Footer as StyledFooter,
    FooterInner,
    FooterItem,
    FooterButton
} from './style'

const Footer: React.SFC = () => (
    <StyledFooter>
        <FooterInner>
            <FooterItem>
                Support{' '}
                <FooterButton href="mailto:hello@doroutine.com">
                    hello@doroutine.com
                </FooterButton>
            </FooterItem>
            <br />
            <br />
            <LogoFullSvg />
            <br />
        </FooterInner>
    </StyledFooter>
)

export default Footer
