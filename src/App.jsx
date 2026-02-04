import EnergyBackground from './components/EnergyBackground';
import LeafOverlay from './components/LeafOverlay';
import TiltCard from './components/TiltCard';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <EnergyBackground />
      <LeafOverlay />

      {/* Hero Header */}
      <header style={{ textAlign: 'center', marginBottom: '4rem', zIndex: 10 }}>
        <h1>KAEN AKABANE</h1>
        <div className="subtitle" style={{ color: '#ff3d00' }}>BINGO BOOK // MENACE TRIPLE SSS</div>
      </header>

      {/* Main Content Stack */}
      <main style={{ width: '100%', maxWidth: '1000px', zIndex: 10 }}>

        {/* Identity Card */}
        <TiltCard className="frame-identity">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h2 className="card-title" style={{ marginBottom: 0 }}>IDENTITÉ_CIBLE</h2>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #ff3d00',
              boxShadow: '0 0 15px rgba(255, 61, 0, 0.5)'
            }}>
              <img
                src="/assets/images/hokage_profile.png"
                alt="Kaen Akabane"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <p className="card-text">
            Sujet classé <strong>TRIPLE SSS</strong> dans le Bingo Book international.
            Hokage de Konoha, considéré comme une puissance de frappe absolue.
            A approcher avec une extrême prudence.
          </p>

          <div className="stats-grid">
            <div className="hud-stat">
              <span className="hud-label">NOM</span>
              <span className="hud-value">KAEN AKABANE</span>
            </div>
            <div className="hud-stat">
              <span className="hud-label">RANG</span>
              <span className="hud-value">HOKAGE</span>
            </div>
            <div className="hud-stat">
              <span className="hud-label">AFFINITÉS</span>
              <span className="hud-value" style={{ fontSize: '1.2rem', letterSpacing: '0px' }}>KATON / SUITON / RAITON / DOTON</span>
            </div>
          </div>
        </TiltCard>

        {/* History Card */}
        <TiltCard className="frame-history">
          <h2 className="card-title">HISTORIQUE_OPÉRATIONNEL</h2>
          <p className="card-text">
            Kaen Akabane n’a jamais été un simple orphelin de guerre. Bébé, il fut enlevé sur ordre des daimyos du Pays du Feu, qui craignaient qu’un jour les clans de Konoha ne replongent le village dans une guerre civile. Leur solution fut radicale : créer leur propre Hokage, un dirigeant façonné dès l’enfance, loyal au pays — pas aux lignées.
            <br /><br />
            Élevé dans des structures secrètes, Kaen Akabane ne connut ni famille ni liberté. Son monde était fait d’entraînement, de stratégie et de conditionnement. On lui apprit que les émotions troublent le jugement, que l’attachement crée des failles, et surtout que les clans, avec leur orgueil et leur héritage, sont la source des guerres. Son corps fut brisé puis reconstruit par des années de formation d’élite. Ses cicatrices en sont les traces visibles. À l’âge adulte, il était devenu une arme parfaite, un ninja capable d’affronter les plus grandes puissances du monde shinobi.
            <br /><br />
            Après la guerre, alors que les tensions politiques entre clans menaçaient d’exploser, les daimyos imposèrent leur choix : un Hokage sans clan. Kaen Akabane fut placé à la tête du village. Pour le peuple, il est un homme au visage doux, au sourire calme, un héros de guerre devenu symbole de stabilité. Un dirigeant humain, rassurant, toujours prêt à protéger les siens.
            <br /><br />
            Mais derrière cette image se cache une conviction forgée depuis l’enfance : les clans sont une menace permanente pour l’équilibre. Et parmi eux, les Uchiha incarnent tout ce qu’il redoute — puissance héréditaire, émotions extrêmes, potentiel de rébellion. Kaen Akabane est persuadé qu’ils complotent pour remettre un Hokage issu d’un clan et reprendre le contrôle du village.
            <br /><br />
            Alors, dans l’ombre, il agit. Les attaques contre les Uchiha, les opérations secrètes, les ninjas masqués… tout remonte jusqu’à lui. Il ne se voit pas comme un bourreau, mais comme un rempart. Sacrifier quelques vies pour éviter une guerre totale. Salir son âme pour préserver la paix.
            <br /><br />
            <strong>Kaen Akabane protège Konoha. Mais à force d’éliminer les menaces dans l’ombre, il est en train de devenir la plus dangereuse de toutes.</strong>
          </p>
        </TiltCard>

        {/* Psychological Profile Card */}
        <TiltCard className="frame-psychological">
          <h2 className="card-title">PROFIL_PSYCHOLOGIQUE</h2>
          <div className="psych-grid" style={{ display: 'grid', gap: '1.5rem' }}>

            <div className="psych-item">
              <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', marginBottom: '0.5rem' }}>MANIPULATEUR DANGEREUX</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>
                Il ne voit pas les individus, mais des ressources, des "fusibles" pour ses plans. Sa capacité à instrumentaliser la loyauté fait de lui un ennemi invisible qui frappe souvent par la main de vos propres alliés.
              </p>
            </div>

            <div className="psych-item">
              <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', marginBottom: '0.5rem' }}>COLÉRIQUE</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>
                Sous son masque de calme réside une rage volcanique. Si son contrôle cède, sa puissance de feu dévastatrice peut raser une zone sans distinction entre civils et ennemis.
              </p>
            </div>

            <div className="psych-item">
              <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', marginBottom: '0.5rem' }}>STRATÈGE DE GÉNIE & VISIONNAIRE</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>
                Il a toujours dix coups d'avance. Il ne cherche pas à gagner une bataille, mais à redessiner la carte politique. S'opposer à lui, c'est jouer à un jeu dont il a déjà écrit la fin.
              </p>
            </div>

            <div className="psych-item">
              <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', marginBottom: '0.5rem' }}>PEUR CACHÉE DE L’ÉCHEC</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>
                Conditionné pour être parfait, l'échec n'est pas une option. Cette terreur le pousse à des mesures extrêmes et amorales ("la fin justifie les moyens") pour garantir le succès de sa mission.
              </p>
            </div>

            <div className="psych-item">
              <h3 style={{ color: '#ff3d00', fontSize: '1.4rem', marginBottom: '0.5rem' }}>SEMBLANT DE GENTILLESSE</h3>
              <p style={{ fontSize: '1rem', color: '#ccc' }}>
                Son visage doux est son camouflage le plus efficace. Il baisse la garde de ses adversaires par une fausse empathie avant de porter le coup fatal. Une main tendue qui tient souvent un kunai.
              </p>
            </div>

          </div>
        </TiltCard>

        {/* Potential Powers Card */}
        <TiltCard className="frame-combat">
          <h2 className="card-title" style={{ color: '#ff9e80', borderLeftColor: '#ff9e80' }}>ANALYSE_POTENTIEL_COMBAT</h2>
          <p className="card-text" style={{ marginBottom: '2rem' }}>
            Les espions n'ont aucune confirmation visuelle, mais les traces de chakra et les rapports fragmentaires suggèrent deux atouts majeurs.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

            {/* Power 1 */}
            <div style={{ background: 'rgba(255, 61, 0, 0.1)', padding: '1rem', border: '1px dashed #ff3d00' }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img src="/assets/images/staff.svg" alt="Staff" style={{ width: '60px', height: '60px' }} />
              </div>
              <h3 style={{ color: '#ff3d00', fontSize: '1.2rem', marginBottom: '0.5rem' }}>BÂTON D'ENMA & INVOCATION</h3>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                Arme légendaire liée au pouvoir de l'Hermite Singe. Capacité de métamorphose et d'extension infinie.
                <br />
                <strong>Capacité Ultime :</strong> Invocation directe du Roi des Singes Enma.
                <br />
                <strong style={{ color: '#ff9e80' }}>Hypothèse SSS :</strong> Le sujet serait lui-même l'Hermite Singe légendaire.
              </p>
            </div>

            {/* Power 2 */}
            <div style={{ background: 'rgba(255, 61, 0, 0.1)', padding: '1rem', border: '1px dashed #ff3d00' }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img src="/assets/images/curse_mark.svg" alt="Curse Mark" style={{ width: '60px', height: '60px' }} />
              </div>
              <h3 style={{ color: '#ff3d00', fontSize: '1.2rem', marginBottom: '0.5rem' }}>MARQUE MAUDITE (TERRE)</h3>
              <ul style={{ fontSize: '0.9rem', color: '#ccc', paddingLeft: '1.2rem', textAlign: 'left' }}>
                <li>Amplification Chakra (Maximale)</li>
                <li>Boost Physique Extrême</li>
                <li>Transformation Démoniaque (Stage 2)</li>
              </ul>
              <div style={{ marginTop: '1rem', borderTop: '1px solid #ff3d00', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/assets/images/mace.svg" alt="Mace" style={{ width: '30px', height: '30px' }} />
                <span style={{ fontSize: '0.8rem', color: '#ff9e80' }}>ARME : MASSE COQUILLE</span>
              </div>
            </div>

          </div>
        </TiltCard>

        {/* Spy Intel Card */}
        <TiltCard className="frame-spy-report">
          <h2 className="card-title" style={{ borderLeftColor: '#d32f2f', color: '#d32f2f' }}>RAPPORT_ESPION : SUCCESION</h2>
          <p className="card-text">
            <strong>INFORMATION DE HAUTE PRIORITÉ</strong>
            <br /><br />
            Kaen Akabane veut s’assurer que son influence ne disparaisse pas avec lui. Conscient qu’il peut mourir à tout moment, il cherche à trouver et former un successeur qu’il pourra modeler dès le départ — non seulement pour diriger le village, mais pour penser comme lui. Son but n’est pas de laisser un héritier fort, mais un héritier façonné, capable de manipuler les forces politiques, les clans et les conflits dans l’ombre avec la même froideur stratégique.
            <br /><br />
            Ainsi, même mort, Kaen Akabane continuerait de contrôler l’équilibre du village à travers quelqu’un qu’il aura construit à son image, garantissant que ses méthodes, son système et sa vision perdurent bien après sa disparition.
          </p>
        </TiltCard>

        {/* Audio Recording Card */}
        <div className="tilt-card">
          <div className="tilt-content frame-audio">
            <h2 className="card-title" style={{ borderLeftColor: '#ffc107', color: '#ffc107' }}>ENREGISTREMENT_INTERCEPTÉ</h2>
            <p className="card-text">
              <strong style={{ color: '#ffc107' }}>⚠ AUDIO CLASSIFIÉ</strong>
              <br /><br />
              L'espion a réussi à intercepter et enregistrer une conversation secrète entre l'Hokage Kaen Akabane et le chef du clan Hyūga.
              Cet enregistrement révèle des informations critiques sur leurs plans et leurs accords clandestins.
              <br /><br />
              <span style={{ fontSize: '0.85rem', color: '#ff9800' }}>
                📅 Date d'enregistrement : [CLASSIFIÉ]<br />
                📍 Lieu : Bureau du Hokage - Zone sécurisée<br />
                🎙 Qualité : Moyenne (enregistrement à distance)
              </span>
            </p>

            <div style={{
              marginTop: '1.5rem',
              padding: '1.5rem',
              background: 'rgba(255, 193, 7, 0.1)',
              border: '1px solid #ffc107',
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>🎧</span>
                <span style={{ color: '#ffc107', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  CONVERSATION HOKAGE × CHEF HYŪGA
                </span>
              </div>

              <audio
                controls
                style={{
                  width: '100%',
                  filter: 'hue-rotate(20deg) saturate(1.5)',
                  outline: 'none'
                }}
              >
                <source src="/assets/audio/espion.mp3" type="audio/mpeg" />
                Votre navigateur ne supporte pas la lecture audio.
              </audio>

              <p style={{
                marginTop: '1rem',
                fontSize: '0.75rem',
                color: '#999',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                ⚠ Écoute sous surveillance - Toute divulgation sera tracée
              </p>
            </div>
          </div>
        </div>

        {/* CLAN RELATIONS CARD */}
        <TiltCard className="frame-clan-relations">
          <h2 className="card-title" style={{ borderColor: '#00e5ff', color: '#00e5ff' }}>ANALYSE_RELATIONS_CLANIQUES</h2>
          <div className="analysis-grid" style={{ display: 'grid', gap: '2rem' }}>

            {/* UCHIHA */}
            <div className="clan-entry frame-clan-uchiha">
              <h3 style={{ borderBottom: '1px solid #ff3d00', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff' }}>CLAN UCHIHA</span>
                <span style={{ color: '#ff3d00', fontSize: '0.8rem' }}>MENACE ÉLEVÉE</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#00e5ff', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>APPARENCE PUBLIQUE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Doux discours officiel. Reconnaît leur force et leur importance.</p>
                </div>
                <div style={{ background: 'rgba(255, 61, 0, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#ff3d00', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>RÉALITÉ CACHÉE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Les perçoit comme une menace existentielle. Peur paranoïaque d’un coup d’État. Cherche activement à les affaiblir.</p>
                </div>
              </div>
              <div className="narrative-plot">
                <div className="narrative-title">🔥 OBJECTIF : L'ENFANT RETOURNÉ</div>
                <div className="narrative-content">
                  Kaen prévoit d'enlever un enfant Uchiha orphelin lors de la prochaine mission à haut risque. L'enfant sera élevé dans l'ombre pendant des années, conditionné à croire que son clan l'a abandonné. Une fois adolescent, il sera réinséré dans le quartier Uchiha comme espion interne, rapportant chaque conversation, chaque réunion secrète. Les Uchiha ne sauront jamais que l'un des leurs travaille pour leur plus grand ennemi.
                </div>
              </div>
            </div>

            {/* HYUGA */}
            <div className="clan-entry frame-clan-hyuga">
              <h3 style={{ borderBottom: '1px solid #00e5ff', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff' }}>CLAN HYŪGA</span>
                <span style={{ color: '#00e5ff', fontSize: '0.8rem' }}>ALLIÉ STRATÉGIQUE</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#00e5ff', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>APPARENCE PUBLIQUE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Confiance totale, missions sensibles.</p>
                </div>
                <div style={{ background: 'rgba(255, 61, 0, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#ff3d00', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>RÉALITÉ CACHÉE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Favoris du Hokage. Exige une loyauté totale. Outil clé pour la stabilité interne.</p>
                </div>
              </div>
              <div className="narrative-plot">
                <div className="narrative-title">🤝 OBJECTIF : LE PACTE DE SANG</div>
                <div className="narrative-content">
                  Kaen cherche à obtenir un secret mortel sur la famille principale Hyūga : une trahison ancestrale qui pourrait détruire leur réputation. Une fois en possession de cette information, il forcera le chef du clan à accepter un "partenariat" : les Hyūga surveilleront les autres clans avec leur Byakugan et rapporteront directement au Hokage. Ils deviendront les yeux de Kaen, piégés dans une alliance qu'ils ne pourront briser sans s'autodétruire.
                </div>
              </div>
            </div>

            {/* ABURAME */}
            <div className="clan-entry frame-clan-aburame">
              <h3 style={{ borderBottom: '1px solid #00e5ff', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff' }}>CLAN ABURAME</span>
                <span style={{ color: '#00e5ff', fontSize: '0.8rem' }}>RESEAU RENSEIGNEMENT</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#00e5ff', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>APPARENCE PUBLIQUE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Prudent, distant, respectueux.</p>
                </div>
                <div style={{ background: 'rgba(255, 61, 0, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#ff3d00', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>RÉALITÉ CACHÉE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Espions idéaux. Cherche à contrôler totalement leur réseau d’information.</p>
                </div>
              </div>
              <div className="narrative-plot">
                <div className="narrative-title">🐛 OBJECTIF : LE RÉSEAU INFECTÉ</div>
                <div className="narrative-content">
                  Kaen planifie de faire modifier génétiquement certains insectes Aburame par la division scientifique, à l'insu du clan. Ces insectes "améliorés" transmettront non seulement des informations à leur hôte Aburame, mais aussi directement aux agents du Hokage via des phéromones codées. Le réseau d'espionnage Aburame deviendra un outil à double tranchant : ils espionneront pour Konoha, mais Kaen les espionnera en retour.
                </div>
              </div>
            </div>

            {/* SENJU */}
            <div className="clan-entry frame-clan-senju">
              <h3 style={{ borderBottom: '1px solid #fff', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff' }}>CLAN SENJU</span>
                <span style={{ color: '#ddd', fontSize: '0.8rem' }}>RIVALITÉ SYMBOLIQUE</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#00e5ff', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>APPARENCE PUBLIQUE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Respect historique immense.</p>
                </div>
                <div style={{ background: 'rgba(255, 61, 0, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#ff3d00', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>RÉALITÉ CACHÉE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Pouvoir Mokuton à éviter. Maintient une distance politique prudente.</p>
                </div>
              </div>
              <div className="narrative-plot">
                <div className="narrative-title">🌱 OBJECTIF : LE SHADOW HOKAGE</div>
                <div className="narrative-content">
                  Il existe un unique porteur du Mokuton à Konoha : un jonin Senju extrêmement puissant. Kaen le manipule depuis son enfance, le façonnant pour qu'il devienne son "Shadow Hokage" - un bras droit absolu qui exécutera ses ordres sans question. En apparence, ce jonin sera présenté comme le successeur idéal, symbole de la renaissance du clan Senju. En réalité, il sera l'extension parfaite du contrôle de Kaen, garantissant que même après sa mort, sa vision perdurera à travers ce pantin surpuissant.
                </div>
              </div>
            </div>

            {/* NARA */}
            <div className="clan-entry frame-clan-nara">
              <h3 style={{ borderBottom: '1px solid #4caf50', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff' }}>CLAN NARA</span>
                <span style={{ color: '#4caf50', fontSize: '0.8rem' }}>COOPÉRATION UTILE</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#00e5ff', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>APPARENCE PUBLIQUE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Respect pour leur intelligence et leur rôle stratégique.</p>
                </div>
                <div style={{ background: 'rgba(255, 61, 0, 0.05)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#ff3d00', display: 'block', fontSize: '0.8rem', marginBottom: '0.3rem' }}>RÉALITÉ CACHÉE</strong>
                  <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Il se méfie de leur capacité à comprendre ses manœuvres. Il les garde proches pour leurs stratégies, mais ne leur donne jamais toutes les informations.</p>
                </div>
              </div>
              <div className="narrative-plot">
                <div className="narrative-title">🧠 OBJECTIF : L'ÉCHEC CALCULÉ</div>
                <div className="narrative-content">
                  Kaen prépare une opération complexe qu'il confiera au stratège en chef Nara. Il omettra délibérément des informations cruciales. Quand la mission échouera, causant des pertes, Kaen défendra publiquement le Nara... tout en murmurant en privé que "même les génies font des erreurs". Les Nara deviendront reconnaissants de la "clémence" du Hokage et n'oseront plus questionner ses décisions, de peur d'un nouvel échec public.
                </div>
              </div>
            </div>

          </div>
        </TiltCard>

        {/* INSTITUTIONAL CONTROL CARD */}
        <TiltCard className="frame-institutional">
          <h2 className="card-title" style={{ borderColor: '#7c4dff', color: '#7c4dff' }}>CONTRÔLE_INSTITUTIONNEL</h2>
          <div className="institution-list" style={{ display: 'grid', gap: '1.5rem' }}>

            <div className="install-item">
              <strong style={{ color: '#e91e63', display: 'block', marginBottom: '0.5rem' }}>🏥 HÔPITAL</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Nommer des médecins loyaux</li>
                <li>Réquisitionner des fiches médicales</li>
                <li>Utiliser les urgences pour surveiller & contrôler</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">💉 OBJECTIF : LE DOSSIER MÉDICAL</div>
                <div className="narrative-content">
                  Kaen prévoit de faire diagnostiquer un ninja Uchiha prometteur avec une "maladie dégénérative rare" par un médecin loyal. En réalité, il sera en parfaite santé. Mais après des mois de "traitements", il deviendra réellement malade, affaibli au point de ne plus pouvoir servir. Kaen utilisera l'hôpital pour éliminer discrètement les ninjas gênants sous couvert de soins médicaux. Les dossiers médicaux seront ses armes de chantage les plus puissantes.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#ff9800', display: 'block', marginBottom: '0.5rem' }}>🎓 ACADÉMIE</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Modifier l’enseignement</li>
                <li>Faire des jeunes des soldats à l’obéissance</li>
                <li>Contrôler ceux qui sont destinés à devenir dirigeants</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">🎓 OBJECTIF : LA GÉNÉRATION FORMATÉE</div>
                <div className="narrative-content">
                  Kaen prévoit de réviser le curriculum de l'Académie pour inclure des "leçons d'histoire" montrant comment les guerres claniques ont failli détruire Konoha. Les enfants apprendront que la loyauté au village prime sur tout, même la famille. Les jeunes issus de clans puissants seront subtilement isolés et surveillés. Dans 10 ans, toute une génération de ninjas pensera exactement comme Kaen le souhaite : le village avant le clan, toujours.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#f44336', display: 'block', marginBottom: '0.5rem' }}>👮 POLICE (UCHIHA)</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Surveiller & affaiblir les Uchiha de l’intérieur</li>
                <li>Limiter leurs moyens d’enquête et de sanction</li>
                <li>Mener de fausses enquêtes pour les discréditer</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">👮 OBJECTIF : L'ENQUÊTE TRUQUÉE</div>
                <div className="narrative-content">
                  Kaen prévoit d'orchestrer une série de "crimes" dans le quartier Uchiha : vols, agressions mineures. Il plantera de fausses preuves menant à des Uchiha innocents. Quand la police Uchiha "échouera" à résoudre ces affaires (car les vrais coupables seront des agents du Hokage), Kaen critiquera publiquement leur incompétence. Cela justifiera le retrait de certains de leurs pouvoirs et l'installation de "superviseurs" non-Uchiha. La police sera alors sous contrôle.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#00bcd4', display: 'block', marginBottom: '0.5rem' }}>🧪 SCIENTIFIQUE</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Limiter certains savoirs sensibles</li>
                <li>Manipuler les recherches à son avantage</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">🧪 OBJECTIF : L'EXPÉRIENCE INTERDITE</div>
                <div className="narrative-content">
                  Kaen prévoit de financer secrètement des recherches dans les sous-sols de la division scientifique sur le contrôle mental et la suppression des pouvoirs héréditaires. Les "volontaires" seront des prisonniers ou des ninjas "disparus en mission". L'objectif : créer un sérum capable de bloquer le Sharingan, le Byakugan, et autres dojutsu. Si les clans deviennent trop menaçants, Kaen aura l'arme ultime pour les neutraliser définitivement.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#9c27b0', display: 'block', marginBottom: '0.5rem' }}>⚖ TRIBUNAL</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Imposer ses propres juges</li>
                <li>Façonner les lois pour punir & dissuader les récalcitrants</li>
                <li>Éliminer ou manipuler ceux qui en savent trop</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">⚖ OBJECTIF : LE JUGE FANTOCHE</div>
                <div className="narrative-content">
                  Kaen prévoit de convoquer un juge intègre qui enquête sur des disparitions suspectes. Il lui montrera des photos compromettantes de sa famille, fabriquées mais convaincantes. Le message sera clair : "Ferme les yeux, ou ta famille souffre". Ce juge signera alors tous les verdicts que Kaen lui soumettra. Les opposants politiques seront condamnés pour "trahison" sur des preuves montées de toutes pièces. La justice deviendra un outil de répression.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#4caf50', display: 'block', marginBottom: '0.5rem' }}>⚔ SECTION MILITAIRE</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Placer des officiers loyaux</li>
                <li>Exercer un contrôle total sur les opérations</li>
                <li>Réprimer immédiatement toute rébellion</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">⚔ OBJECTIF : L'OPÉRATION NOIRE</div>
                <div className="narrative-content">
                  Kaen prévoit de créer une unité spéciale appelée "Racine Fantôme" - des ninjas sans identité, sans passé, totalement loyaux au Hokage. Ils porteront des masques et n'auront aucun lien avec leurs clans d'origine. Leur mission : éliminer les cibles que Kaen désignera, que ce soit à l'intérieur ou à l'extérieur du village. Ces assassinats seront déguisés en accidents, maladies, ou attaques ennemies. Personne ne soupçonnera que le Hokage dirige sa propre escouade de la mort.
                </div>
              </div>
            </div>

            <div className="install-item">
              <strong style={{ color: '#3f51b5', display: 'block', marginBottom: '0.5rem' }}>🌍 DIPLOMATIE</strong>
              <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.9rem' }}>
                <li>Espionner & faire chanter les interlocuteurs</li>
                <li>Se rapprocher discrètement des clans ennemis pour les diviser</li>
                <li>Cacher la véritable autorité du Hokage derrière des plausibles dénis</li>
              </ul>
              <div className="narrative-plot">
                <div className="narrative-title">🌍 OBJECTIF : LE TRAITÉ PIÉGÉ</div>
                <div className="narrative-content">
                  Kaen prévoit de négocier secrètement avec Suna : en échange d'informations sur les mouvements Uchiha et les faiblesses défensives de Konoha, Suna recevra un soutien économique discret et des routes commerciales avantageuses. Si les Uchiha tentent un coup d'État, Suna attaquera simultanément les frontières de Konoha, forçant le village à se battre sur deux fronts. Kaen pourra alors "héroïquement" sauver Konoha en écrasant les Uchiha, les accusant d'avoir provoqué l'invasion de Suna par leur rébellion. Suna sera son pion sacrificiel.
                </div>
              </div>
            </div>

          </div>
        </TiltCard>

        {/* Vision Card */}
        <TiltCard className="frame-directives">
          <h2 className="card-title">DIRECTIVES_PRIORITAIRES (RÉELLES)</h2>
          <div className="vision-item">
            <div className="vision-marker"></div>
            <span><strong>DÉMANTÈLEMENT DE L'HÉGEMONIE CLANIQUE</strong><br /><span style={{ fontSize: '0.9rem', color: '#ccc' }}>Réduire l'influence politique des familles nobles (Uchiha en priorité).</span></span>
          </div>
          <div className="vision-item">
            <div className="vision-marker"></div>
            <span><strong>CENTRALISATION TOTALE DES INSTITUTIONS</strong><br /><span style={{ fontSize: '0.9rem', color: '#ccc' }}>Placer Hôpital, Police et Académie sous commandement direct.</span></span>
          </div>
          <div className="vision-item">
            <div className="vision-marker"></div>
            <span><strong>FORMATAGE IDÉOLOGIQUE DE LA RELÈVE</strong><br /><span style={{ fontSize: '0.9rem', color: '#ccc' }}>Créer une génération loyale au Village, détachée des lignées.</span></span>
          </div>

          <div style={{ textAlign: 'right', marginTop: '2rem' }}>
            <div className="official-stamp" style={{ borderColor: '#d32f2f', color: '#d32f2f' }}>CLASSIFIÉ ROUGE</div>
          </div>
        </TiltCard>

        {/* Final Report: Spy Death */}
        <TiltCard className="frame-final-report">
          <h2 className="card-title" style={{ color: '#555', borderColor: '#555' }}>RAPPORT_FINAL : STATUT_AGENT</h2>
          <p className="card-text" style={{ color: '#888', fontStyle: 'italic' }}>
            <strong>[CONNEXION PERDUE]</strong>
            <br /><br />
            L'espion en charge des informations contenues dans ce dossier est mort soudainement. Il a disparu lors d'une mission de routine quelques heures après la transmission de ces données. D'après les dernières analyses, il a été éliminé proprement.
            <br /><br />
            Est-ce un coup orchestré par l'Hokage pour effacer ses traces, ou un simple hasard tragique ? Nous ne le saurons jamais.
            <br /><br />
            <span style={{ color: '#d32f2f', fontWeight: 'bold', letterSpacing: '2px' }}>// DOSSIER CLOS //</span>
          </p>
        </TiltCard>

      </main>
    </div>
  );
}

export default App;
