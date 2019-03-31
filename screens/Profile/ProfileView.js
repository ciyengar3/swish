import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

export default class ProfileView extends React.Component {
  render() {
    const { manifest } = Constants;
    const sections = [
      { data: [{ value: 'Crishna' }], title: 'Name' },
      { data: [{ value: '23' }], title: 'Age' },
      { data: [{ value: 'Intermediate' }], title: 'Skill Level' },
      {
        data: [{ value: 'Rutgers Park' }], title: 'Courts I\'ve visited'
      },
    ];

    return (
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={ListHeader}
        sections={sections}
      />
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return (
        <SectionContent>
          {item.value && <Color value={item.value} />}
        </SectionContent>
      );
    } else {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      );
    }
  };
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <AppIconPreview iconUrl={manifest.iconUrl} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          ciyengar3
        </Text>

        <Text style={styles.slugText} numberOfLines={1}>
          Baller with a purpose
        </Text>

        <Text style={styles.descriptionText}>
          {manifest.description}
        </Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl =
      'data:image/png;base64,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';
  }

  return (
    <Image
      source={{ uri: iconUrl }}
      style={{ width: 64, height: 64 }}
      resizeMode="cover"
    />
  );
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>
            {value}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#bada55',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 18,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});
