import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type FortuneTellerCard = {
  id: string;
  name: string;
  handle: string;
  duration: string;
  description: string;
  tags: string[];
  sessions: number;
  rating: number;
  icon: string;
  accent: string;
  tagTone: 'a' | 'b' | 'c' | 'd';
};

const FORTUNE_TELLERS: FortuneTellerCard[] = [
  {
    id: 'mizuki',
    name: 'みずき',
    handle: '@mizuki',
    duration: '修行3ヶ月',
    description: '西洋占星術を3年学び、タロットに転向しました。練習相手を探しています 🌙',
    tags: ['タロット', '新人', '無料'],
    sessions: 12,
    rating: 4.8,
    icon: '🔮',
    accent: '#d9d9eb',
    tagTone: 'a',
  },
  {
    id: 'sakura',
    name: 'さくら',
    handle: '@sakura',
    duration: '修行1年',
    description: '恋愛・仕事の悩みが得意。丁寧な鑑定をお届けします ⭐',
    tags: ['星占い', '手相', '無料'],
    sessions: 31,
    rating: 4.5,
    icon: '⭐',
    accent: '#eadde4',
    tagTone: 'b',
  },
  {
    id: 'ren',
    name: 'れん',
    handle: '@ren',
    duration: '修行6ヶ月',
    description: '初心者の方も大歓迎！一緒に占いの世界を楽しみましょう 🌿',
    tags: ['タロット', '無料'],
    sessions: 5,
    rating: 4.9,
    icon: '🌙',
    accent: '#cee1db',
    tagTone: 'c',
  },
];

const PANEL_MAX_WIDTH = 900;
const OUTER_PADDING = 16;
const GRID_GAP = 12;
const CARD_FIXED_WIDTH = Math.floor((PANEL_MAX_WIDTH - 40 - GRID_GAP * 2) / 3); // ~278px

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" />
      <View style={styles.glowLeft} />
      <View style={styles.glowRight} />
      <ScrollView contentContainerStyle={styles.rootWrap}>
        <View style={styles.panel}>
          <View style={styles.gridRow}>
            {FORTUNE_TELLERS.map((item) => (
              <View key={item.id} style={[styles.card, styles.cardFlex]}>
                <View style={[styles.cardTopBand, { backgroundColor: item.accent }]} />
                <View style={styles.iconBubble}>
                  <Text style={styles.iconText}>{item.icon}</Text>
                </View>

                <View style={styles.cardBody}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.handle}>
                    {item.handle}・{item.duration}
                  </Text>
                  <Text style={styles.description}>{item.description}</Text>

                  <View style={styles.tagsRow}>
                    {item.tags.map((tag) => (
                      <View key={`${item.id}-${tag}`} style={[styles.tag, tagToneStyle[item.tagTone]]}>
                        <Text style={styles.tagText}>{tag}</Text>
                      </View>
                    ))}
                  </View>

                  <View style={styles.footerRow}>
                    <Text style={styles.sessions}>セッション{item.sessions}回</Text>
                    <Text style={styles.rating}>⭐ {item.rating.toFixed(1)}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const tagToneStyle = StyleSheet.create({
  a: { backgroundColor: '#c8ecec' },
  b: { backgroundColor: '#f2e3e9' },
  c: { backgroundColor: '#d9ecc8' },
  d: { backgroundColor: '#e5e5e5' },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#181818',
  },
  glowLeft: {
    position: 'absolute',
    left: -80,
    top: 120,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#353535',
    opacity: 0.5,
  },
  glowRight: {
    position: 'absolute',
    right: -70,
    bottom: 50,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#2e2e2e',
    opacity: 0.4,
  },
  rootWrap: {
    paddingTop: 22,
    paddingBottom: 30,
    paddingHorizontal: OUTER_PADDING,
    alignItems: 'center',
  },
  panel: {
    width: '100%',
    maxWidth: PANEL_MAX_WIDTH,
    backgroundColor: '#202421',
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: '#3a3c42',
  },
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
  },
  gridCol: {
    flexDirection: 'column',
    gap: GRID_GAP,
  },
  cardFlex: {
    flexBasis: CARD_FIXED_WIDTH,
    flexGrow: 1,
    flexShrink: 0,
  },
  cardFull: {
    width: '100%',
  },
  card: {
    backgroundColor: '#2a2c31',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4f545e',
    overflow: 'hidden',
  },
  cardTopBand: {
    height: 46,
  },
  iconBubble: {
    position: 'absolute',
    top: 24,
    left: 18,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2f2f2f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
  },
  name: {
    color: '#f0f0f0',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 34,
    marginBottom: 2,
  },
  handle: {
    color: '#c4c4c4',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#f4f4f4',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 9,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#2f2f2f',
    fontSize: 12,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessions: {
    color: '#c4c4c4',
    fontSize: 14,
    fontWeight: '700',
  },
  rating: {
    color: '#f7ae2d',
    fontSize: 22,
    fontWeight: '800',
  },
});
