import React from 'react'
import { LiquidityMiningCampaign } from 'dxswap-sdk'
import { DarkCard } from '../../Card'
import Information from './Information'
import StakeCard from './StakeCard'
import { AutoColumn } from '../../Column'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeft } from 'react-feather'
import { useActiveWeb3React } from '../../../hooks'

const GoBackContainer = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
`

const StyledChevronLeft = styled(ChevronLeft)`
  width: 14px;
  height: 14px;
  color: ${props => props.theme.white};
  margin-right: 4px;
`

interface PairViewProps {
  campaign?: LiquidityMiningCampaign | null
}

function LiquidityMiningCampaignView({ campaign }: PairViewProps) {
  const history = useHistory()
  const { account } = useActiveWeb3React()

  return (
    <AutoColumn gap="18px">
      <GoBackContainer onClick={history.goBack}>
        <StyledChevronLeft />
        Back to pair
      </GoBackContainer>

      <DarkCard padding="32px">
        <AutoColumn gap="18px">
          <Information
            targetedPair={campaign?.targetedPair}
            stakingCap={campaign?.stakingCap}
            rewards={campaign?.rewards}
            remainingRewards={campaign?.remainingRewards}
            locked={campaign?.locked}
            startsAt={campaign ? parseInt(campaign.startsAt.toString()) : undefined}
            endsAt={campaign ? parseInt(campaign.endsAt.toString()) : undefined}
            apy={campaign?.apy}
            staked={campaign?.staked}
          />
          {account && <StakeCard campaign={campaign || undefined} />}
        </AutoColumn>
      </DarkCard>
    </AutoColumn>
  )
}

export default LiquidityMiningCampaignView
