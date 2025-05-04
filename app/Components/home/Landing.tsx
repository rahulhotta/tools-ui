import React from 'react'
import './Landing.scss';
import CommonCard from '@/app/Utils/CommonElements/Card/CommonCard';
import { Col, Row } from 'antd';
import Link from 'next/link';
import * as LuIcons from 'react-icons/lu';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as PiIcons from 'react-icons/pi';
import Landing_page_card from '@/app/Utils/CommonElements/landing_page_card/Landing_page_card';
import FeaturesJson from '../../../public/Jsons/HomeFeatures.json'
const LandingPage = () => {
  const features: Array<Object> = FeaturesJson.features;
  type IconPacks = {
    [key: string]: { [key: string]: React.ComponentType };
  };
  
  const iconPacks: IconPacks= {
    Lu: LuIcons,
    Fa: FaIcons,
    Md: MdIcons,
    Ai: AiIcons,
    Pi: PiIcons,
  };
  const renderIcon = (iconName:any) => {
    // Extract prefix (first two characters) to determine the icon library
    const prefix = iconName.substring(0, 2);
    const library = iconPacks[prefix];
    
    // Check if the library exists and the icon exists in that library
    console.log('library: ',library, ' ,iconName: ', iconName)
    if (library && library[iconName]) {
      const IconComponent = library[iconName];
      return <IconComponent />;
    }
    
  };
  return (
    <div className='landing_page_container'>
      <div className='landing_header_conatainer'>
        <h1>
          Access All your important Tools, ONLINE.
        </h1>
      </div>
      {
        features.map((feature: any) => {
          return (
            <Row key={feature.groupId} className='landing_page_features'>
              <Col span={16} xs={{ span: 23 }}
                sm={{ span: 23 }}
                md={{ span: 22 }}
                lg={{ span: 16 }} className='parent_card'>
                <CommonCard >
                  <div className='child_folder'>
                    <h2>{feature?.name}</h2>
                    <div className='child_card_container'>
                      {
                        feature.children.map((childFeature: any) => {
                          const IconComponent = renderIcon(childFeature.icon);
                          return (
                            <div key={childFeature.childId} className='child_card'>
                              <Link href={childFeature.route} prefetch={true}>
                                <Landing_page_card icon={IconComponent} name={childFeature.name} description={childFeature.description} badge={childFeature.badge} badgeText={childFeature.badgeText} />
                              </Link>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </CommonCard>
              </Col>
            </Row>
          )
        })
      }

    </div>
  )
}

export default LandingPage