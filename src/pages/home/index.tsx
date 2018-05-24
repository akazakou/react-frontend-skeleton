import * as React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles: {[key: string]: React.CSSProperties} = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    overflowY: 'auto'
  }
}

function generateTileData () {
  const data = []
  for (let i = 0; i < 12; i++) {
    data.push({
      id: Math.random(),
      img: `https://picsum.photos/${Math.floor(Math.random() * 1980) + 400}/${Math.floor(Math.random() * 1980) + 400}/?random`,
      title: `Image #${i}`,
      author: `Author #${i}`,
      featured: false
    })
  }

  return data
}

const tilesData = generateTileData()

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList cellHeight={200} style={styles.gridList}>
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
        >
          <img src={tile.img} alt={tile.title} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

export default GridListExampleSimple
