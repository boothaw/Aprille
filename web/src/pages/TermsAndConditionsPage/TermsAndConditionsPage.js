import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Wave from 'src/components/Wave/Wave'

const TermsAndConditionsPage = () => {
  return (
    <>
      <MetaTags
        title="Terms And Conditions"
        description="Terms And Conditions"
      />

      <div className="copy-section">
        <Wave title="terms and conditions"></Wave>
        <div className="copy-section__inner">
          <p>
            Moray non bonnethead. Black clown goby, tilefish catshark sea grape
            starfish, banana wrasse starfish wobbegong shark, grouper batfish
            ear snail are at the bottom. Spotted sweetlips loving in catshark
            pebblesnail at seabass with faucet snail. Black clown goby, tilefish
            catshark sea grap.
          </p>
          <p className="bold navy">Important Things</p>
          <p>
            Starfish, banana wrasse starfish wobbegong shark, grouper batfish
            ear snail are at the bottom. Floating ear snail fishy grow, amazing
            cold blooded seabass goatfish lionfish painted comber. Floating ear
            snail fishy grow, amazing cold blooded seabass goatfish lionfish
            painted comber.
          </p>
          <p className="bold navy">Other Stuff</p>
          <p>
            Quagga mussel grey whale mermaid appeared. Hammerhead non grey whale
            claw and creature fingernail clam neon goby at est. Colorful
            soldierfish banded sole jump. Seahorse roc.
          </p>
          <p>
            For further questions please{' '}
            <Link className="learn-more" to={routes.about()}>
              Reach Out
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditionsPage
