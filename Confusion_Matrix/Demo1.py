from sklearn.metrics import confusion_matrix,precision_score, recall_score, f1_score
import seaborn as sns
import matplotlib.pyplot as plt

#These are our actual values
y_true = ["Positive","Negative","Positive","Positive","Negative","Negative","Positive","Negative","Positive","Negative"]

#These are the values predicted by our test
y_pred = ["Positive","Positive","Positive","Negative","Negative","Positive","Positive","Negative","Positive","Negative"]

#Create confustion matrix
cm = confusion_matrix(y_true, y_pred, labels = ["Positive", "Negative"])

#Visualize the confusion matrix using Seaborn
plt.figure(figsize =(10,7))
sns.heatmap(cm,annot = True, fmt = 'd',cmap = 'Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()
