import React from 'react'
import {
    Query
} from 'react-apollo'
import {
    Block, Loader, Media
} from '../../components'

import {
    mapEdgesToNodes, renderButtons
} from '../Tools'

// import getGroupContentItems from '../../queries/getGroupContentItems'
import RowLayout from './RowLayout'

// body is a react component
const Row = ({ id, title, htmlContent, coverImage, backgroundColor, reversePatternSide = false, groupItems }) => {
    const img = coverImage ? coverImage.sources[0].uri : null



    // return (
    //     <Query query={getGroupContentItems(id)} fetchPolicy="cache-and-network">
    //         {({ loading, error, data: groupContent }) => {

    //             if (loading) return (
    //                 <RowLayout title={title} body={htmlContent} backgroundImg={img} backgroundColor={backgroundColor}>
    //                     <Loader />
    //                 </RowLayout>
    //             )
    //             if (error) return (
    //                 <RowLayout title={title} body={htmlContent} backgroundImg={img} backgroundColor={backgroundColor}>
    //                     <h1>There was an error loading this content. Please try again later.</h1>
    //                 </RowLayout>
    //             )

    //             const groupItems = mapEdgesToNodes(groupContent.node.childContentItemsConnection)

                return (
                    <RowLayout
                        title={title}
                        body={htmlContent}
                        backgroundImg={img}
                        backgroundColor={backgroundColor}
                        backgroundImgReverse={reversePatternSide} >
                        {groupItems.map((groupItem, i) => {
                            const props = {
                                imageUrl: groupItem.coverImage ? groupItem.coverImage.sources[0].uri : null,
                                imageAlt: groupItem.imageAlt,
                                videoUrl: groupItem.videos && groupItem.videos[0].sources.length
                                    ? groupItem.videos[0].sources[0].uri
                                    : null
                            }

                            return groupItem.gridImageLink
                                ? (
                                    <a href={groupItem.gridImageLink} backgroundcolor={groupItem.backgroundColor} key={i}>
                                        <Media {...props} ratio="1by1" />
                                    </a>
                                )
                                : (
                                    <div className="text-dark" backgroundcolor={groupItem.backgroundColor} key={i}>
                                        <Media {...props} ratio={groupItem.imageRatio} />
                                        <Block layout='default'>
                                            <Block.Body>
                                                {groupItem.htmlContent}
                                            </Block.Body>

                                            {renderButtons(groupItem.callsToAction, groupItem.buttonColor, title, groupItem.openLinksInNewTab)}
                                        </Block>
                                    </div>
                                )
                        })}
                    </RowLayout>
                )}
//             }}
//         </Query>
//     )
// }

export default Row;