import * as SC from './styles'
import fire from '../../assets/fire.svg'

export const Modal = () => {
  return (
    <SC.Modal>
      <SC.ModalContent>
        <SC.ButtonCloseModal onClick="closeModal()" />
        <SC.BoxImagesModal>
          <SC.BoxIconTypeModal>
            <img id="iconTypePokemon" src={fire} alt="" />
          </SC.BoxIconTypeModal>
          <img id="imagePokemon" src="" alt="" />
        </SC.BoxImagesModal>
        <SC.BoxInfoModal>
          <p id="namePokemon" className="title-modal">
            Charmeleon
          </p>
          <span id="idPokemon" className="title-modal-id-pokemon">
            #005
          </span>
          <SC.BoxTypeModal>
            <SC.BoxGroupTypeModal>
              <div id="bgType1" className="box-type-modal"></div>
              <div id="textType1" className="text-type-modal">
                Fire
              </div>
            </SC.BoxGroupTypeModal>
          </SC.BoxTypeModal>
          <SC.BoxMeasurementsModal>
            <div className="box-info">
              <p className="head-grid-info-modal">Height</p>
              <p id="height" className="content-grid-info-modal">
                1.7m
              </p>
            </div>
            <div className="box-info">
              <p className="head-grid-info-modal">Weight</p>
              <p id="weight" className="content-grid-info-modal">
                90.5kg
              </p>
            </div>
            <div className="box-info">
              <p className="head-grid-info-modal">Abilities</p>
              <p id="ability" className="content-grid-info-modal">
                Blaze
              </p>
            </div>
          </SC.BoxMeasurementsModal>
          <SC.BoxStatsModal>
            <p>Stats</p>
            <SC.BoxGroupStatsModal>
              <h3>HP</h3>
              <SC.BoxInfoDataStatsModal>
                <SC.InfoDataStatsBarValue />
                <SC.InfoDataStatsBar />
                <SC.InfoDataStatsBar />
                <SC.InfoDataStatsBar />
                <SC.InfoDataStatsBar />
              </SC.BoxInfoDataStatsModal>
            </SC.BoxGroupStatsModal>
          </SC.BoxStatsModal>
        </SC.BoxInfoModal>
      </SC.ModalContent>
    </SC.Modal>
  )
}
