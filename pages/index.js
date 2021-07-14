import MainGrid from '../src/lib/components/MainGrid';
import Box from '../src/lib/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/lib/components/ProfileRelations';


function ProfileSidebar(props){
  return (
    <Box>
    <img style={{borderRadius: '8px'}} src={`https://github.com/${props.githubUser}.png`}/>
  </Box>
  )
}
export default function Home() {
const aleatoryUser = 'maiconviana2'
const pessoasDaComunidade = ['juunegreiros', 'omariosouto', 'peas', 'marcobrunodev','rafaballerini', 'felipefialho']



  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={aleatoryUser}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
        <h1 className="title">
          Bem vindo(a)
        </h1>
        </Box>
        <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
      </div>
      <div className="profileRelationArea" style={{gridArea: 'profileRelationArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Pessoas da comunidade ({pessoasDaComunidade.length})</h2>
          
          <ul>
          {pessoasDaComunidade.map((itemAtual)=>{

            return (
              <li>
            <a href={'/users/${itemAtual}'} key={itemAtual}>
            <img src={`https://github.com/${itemAtual}.png`}/>
            <span>{itemAtual}</span>
            </a> 
            </li>)
          }
          )}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
