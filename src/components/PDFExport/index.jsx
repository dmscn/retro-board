import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import tokens from '@gympass/yoga-tokens'
import { BoardProvider, useBoard } from '@contexts/board'
import { ColumnProvider, useColumn } from '@contexts/column'

const { spacing, colors } = tokens

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
  titleLabel: {
    fontSize: spacing.xxsmall + 2,
    color: colors.medium,
    marginTop: spacing.medium,
    marginHorizontal: spacing.medium,
  },
  title: {
    color: colors.text,
    fontSize: spacing.medium,
    marginTop: spacing.xxxsmall,
    marginBottom: spacing.medium,
    marginHorizontal: spacing.medium,
  },
  section: {
    marginHorizontal: spacing.xsmall,
    marginBottom: spacing.xxxsmall,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.xsmall,
  },
  sectionLabel: {
    fontSize: spacing.xxsmall + 2,
    color: colors.medium,
    marginBottom: spacing.xxxsmall,
  },
  sectionTitle: {
    fontSize: spacing.small,
    color: colors.deep,
    fontStyle: 'bold',
  },
  cardsListSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.xsmall,
    backgroundColor: colors.clear,
  },
  cardSection: {
    minWidth: '20%',
    padding: spacing.xxsmall,
  },
  cardTitle: {
    fontSize: spacing.xsmall,
    color: colors.text,
  },
  cardDescription: {
    fontSize: spacing.xxsmall + 2,
    color: colors.deep,
    marginTop: spacing.xxxsmall,
  },
  commentSection: {
    marginTop: spacing.xxxsmall,
  },
  commentText: {
    fontSize: spacing.xxsmall + 2,
    color: colors.medium,
    marginTop: spacing.xxxsmall,
    marginLeft: spacing.xxsmall,
    paddingLeft: spacing.xxsmall,
    borderRadius: 2,
    borderLeftWidth: 2,
    borderLeftColor: colors.medium,
  },
  labelsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: spacing.xxxsmall,
  },
  labelContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.medium,
    marginHorizontal: spacing.xxxsmall - 2,
    paddingHorizontal: spacing.xxxsmall,
    paddingVertical: 2,
  },
  labelText: {
    color: colors.medium,
    fontSize: spacing.xxsmall,
  },
})

const ColumnContent = () => {
  const { cards } = useColumn()

  return (
    <View style={styles.cardsListSection}>
      {cards?.map(card => (
        <View key={card.id} style={styles.cardSection}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
          <View style={styles.labelsRow}>
            {card.labels?.map(label => (
              <View key={label} style={styles.labelContainer}>
                <Text style={styles.labelText}>{label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.commentSection}>
            {card?.comments?.map(comment => (
              <Text key={comment} style={styles.commentText}>
                {comment}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

const PDF = ({ boardName }) => {
  const { columns } = useBoard()

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.titleLabel}>Nome do quadro</Text>
        <Text style={styles.title}>{boardName}</Text>
        {columns &&
          columns.map(column => (
            <View key={column.id} style={styles.section}>
              <Text style={styles.sectionLabel}>Coluna</Text>
              <Text style={styles.sectionTitle}>{column.title}</Text>

              <ColumnProvider slug={column.id} column={column}>
                <ColumnContent />
              </ColumnProvider>
            </View>
          ))}
      </Page>
    </Document>
  )
}

const PDFWithProviders = ({ name, slug }) => (
  <BoardProvider slug={slug}>
    <PDF boardName={name} />
  </BoardProvider>
)

export default PDFWithProviders
