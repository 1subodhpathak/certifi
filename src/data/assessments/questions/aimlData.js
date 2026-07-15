import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level AI/ML assessment.
// Questions progress from foundational concepts to applied ML, deep learning,
// GenAI, MLOps, evaluation, and responsible AI.
export const aimlData = {
  id: ASSESSMENT_TYPES.aiml,
  title: 'AI & Machine Learning Professional Certification',
  shortTitle: 'AI/ML',
  category: 'Advanced Tech',
  durationMinutes: 45,
  pointsPerQuestion: 5,
  description:
    'Professional assessment covering AI/ML fundamentals, supervised and unsupervised learning, model evaluation, feature engineering, deep learning, NLP, Generative AI, MLOps, and responsible AI.',
  questions: [
    {
      id: 'ai-01',
      type: 'mcq',
      title: 'Machine Learning Fundamentals',
      prompt: 'Which statement best describes Machine Learning?',
      options: [
        'A system that follows only manually written rules',
        'A system that learns patterns from data to make predictions or decisions',
        'A database technique used only for storing large datasets',
        'A method used only for building robots'
      ],
      correctIndex: 1,
      explanation:
        'Machine Learning enables systems to learn patterns from data and use those patterns to make predictions, classifications, or decisions.'
    },
    {
      id: 'ai-02',
      type: 'mcq',
      title: 'Supervised Learning',
      prompt: 'Which type of learning uses labeled input-output examples during training?',
      options: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Self-organizing Learning'
      ],
      correctIndex: 0,
      explanation:
        'Supervised learning uses labeled data where each training example includes both input features and the correct target output.'
    },
    {
      id: 'ai-03',
      type: 'mcq',
      title: 'Regression',
      prompt: 'Which of the following is a regression problem?',
      options: [
        'Predicting the selling price of a house',
        'Classifying an email as spam or not spam',
        'Grouping customers into segments',
        'Detecting whether a transaction is fraudulent'
      ],
      correctIndex: 0,
      explanation:
        'Regression is used when the target variable is continuous, such as price, revenue, temperature, or demand.'
    },
    {
      id: 'ai-04',
      type: 'mcq',
      title: 'Classification',
      prompt: 'Which of the following is a classification problem?',
      options: [
        'Predicting monthly sales amount',
        'Estimating delivery time in minutes',
        'Predicting whether a customer will churn or not',
        'Forecasting next week’s temperature'
      ],
      correctIndex: 2,
      explanation:
        'Classification predicts a discrete category or class, such as churn/no churn, fraud/not fraud, or approved/rejected.'
    },
    {
      id: 'ai-05',
      type: 'mcq',
      title: 'Features and Labels',
      prompt: 'In a supervised learning dataset, what is the label?',
      options: [
        'The target value the model is trained to predict',
        'A column that uniquely identifies each row',
        'The hardware used to train the model',
        'The algorithm used for training'
      ],
      correctIndex: 0,
      explanation:
        'The label, also called the target variable, is the correct output that the model learns to predict.'
    },
    {
      id: 'ai-06',
      type: 'mcq',
      title: 'Train-Test Split',
      prompt: 'Why do we split data into training and test sets?',
      options: [
        'To reduce the size of the dataset permanently',
        'To evaluate how well the model performs on unseen data',
        'To remove all incorrect records from the dataset',
        'To make the model train without features'
      ],
      correctIndex: 1,
      explanation:
        'A test set simulates unseen real-world data and helps estimate whether the model generalizes beyond the training data.'
    },
    {
      id: 'ai-07',
      type: 'mcq',
      title: 'Unsupervised Learning',
      prompt: 'Which task is commonly solved using unsupervised learning?',
      options: [
        'Predicting loan default using labeled history',
        'Classifying product reviews as positive or negative',
        'Grouping similar customers based on behavior',
        'Predicting insurance claim amount'
      ],
      correctIndex: 2,
      explanation:
        'Unsupervised learning discovers patterns in unlabeled data. Customer segmentation is a common clustering use case.'
    },
    {
      id: 'ai-08',
      type: 'mcq',
      title: 'Imbalanced Data',
      prompt: 'A fraud detection dataset has 99% non-fraud transactions and 1% fraud transactions. Why can accuracy be misleading?',
      options: [
        'Accuracy cannot be used for classification problems',
        'A model can achieve high accuracy by mostly predicting the majority class',
        'Accuracy works only for neural networks',
        'Accuracy always penalizes false positives more than false negatives'
      ],
      correctIndex: 1,
      explanation:
        'In highly imbalanced datasets, a model may appear accurate by predicting the majority class while failing to detect the minority class.'
    },
    {
      id: 'ai-09',
      type: 'mcq',
      title: 'Precision and Recall',
      prompt: 'Which statement correctly describes precision and recall?',
      options: [
        'Precision measures how many predicted positives are correct; recall measures how many actual positives were found',
        'Precision and recall are only used for regression',
        'Precision measures speed; recall measures memory usage',
        'Precision and recall are always identical'
      ],
      correctIndex: 0,
      explanation:
        'Precision focuses on correctness among predicted positives, while recall focuses on capturing actual positives.'
    },
    {
      id: 'ai-10',
      type: 'mcq',
      title: 'Confusion Matrix',
      prompt: 'In a medical diagnosis model, what is a false negative?',
      options: [
        'The model predicts disease and the patient has the disease',
        'The model predicts disease but the patient does not have the disease',
        'The model predicts no disease but the patient actually has the disease',
        'The model predicts no disease and the patient does not have the disease'
      ],
      correctIndex: 2,
      explanation:
        'A false negative occurs when the actual class is positive, but the model incorrectly predicts negative.'
    },
    {
      id: 'ai-11',
      type: 'mcq',
      title: 'Bias and Variance',
      prompt: 'A model has high training error and high validation error. What is the most likely issue?',
      options: [
        'High bias and underfitting',
        'High variance and overfitting',
        'Data leakage',
        'Perfect generalization'
      ],
      correctIndex: 0,
      explanation:
        'High training and validation error usually indicate underfitting, where the model is too simple to capture the underlying pattern.'
    },
    {
      id: 'ai-12',
      type: 'mcq',
      title: 'Overfitting',
      prompt: 'Which situation most clearly indicates overfitting?',
      options: [
        'High training error and high test error',
        'Very low training error but much higher validation error',
        'Training and validation errors are both stable and low',
        'The model has fewer features than the dataset'
      ],
      correctIndex: 1,
      explanation:
        'Overfitting occurs when a model learns training-specific noise or patterns and performs poorly on unseen validation data.'
    },
    {
      id: 'ai-13',
      type: 'mcq',
      title: 'Regularization',
      prompt: 'What is the main purpose of L2 regularization?',
      options: [
        'To remove the need for a validation set',
        'To increase the number of target classes',
        'To penalize large model weights and reduce overfitting',
        'To convert categorical data into text'
      ],
      correctIndex: 2,
      explanation:
        'L2 regularization adds a penalty for large weights, encouraging simpler models that generalize better.'
    },
    {
      id: 'ai-14',
      type: 'mcq',
      title: 'Cross-Validation',
      prompt: 'What is the primary benefit of K-Fold Cross-Validation?',
      options: [
        'It provides a more reliable performance estimate by evaluating the model across multiple data splits',
        'It guarantees that the model will have zero error',
        'It removes the need for data preprocessing',
        'It converts unsupervised learning into supervised learning'
      ],
      correctIndex: 0,
      explanation:
        'K-Fold Cross-Validation reduces dependency on a single train-test split and gives a more robust estimate of model performance.'
    },
    {
      id: 'ai-15',
      type: 'mcq',
      title: 'Data Leakage',
      prompt: 'What is data leakage in Machine Learning?',
      options: [
        'When a dataset is too large to fit in memory',
        'When missing values are replaced with averages',
        'When information unavailable at prediction time is accidentally used during training',
        'When the model is deployed to production'
      ],
      correctIndex: 2,
      explanation:
        'Data leakage happens when the model learns from information that would not be available in real-world prediction, causing overly optimistic results.'
    },
    {
      id: 'ai-16',
      type: 'mcq',
      title: 'Feature Scaling',
      prompt: 'Why is feature scaling important for algorithms such as KNN, SVM, and gradient descent-based models?',
      options: [
        'It converts labels into features',
        'It prevents features with larger numeric ranges from dominating the learning process',
        'It removes the need for model evaluation',
        'It guarantees better accuracy for every model'
      ],
      correctIndex: 1,
      explanation:
        'Distance-based and gradient-based algorithms are sensitive to feature scale. Scaling helps features contribute more fairly.'
    },
    {
      id: 'ai-17',
      type: 'mcq',
      title: 'Categorical Encoding',
      prompt: 'When is one-hot encoding usually preferred over ordinal encoding?',
      options: [
        'When categories have a natural ranking',
        'When the target variable is continuous',
        'When there are no categorical variables',
        'When categories do not have a meaningful order'
      ],
      correctIndex: 3,
      explanation:
        'One-hot encoding is suitable for nominal categories where no natural order exists, such as city, color, or department.'
    },
    {
      id: 'ai-18',
      type: 'mcq',
      title: 'ROC-AUC',
      prompt: 'What does ROC-AUC measure in a binary classification model?',
      options: [
        'The model’s ability to rank positive examples higher than negative examples across thresholds',
        'The average squared difference between actual and predicted values',
        'The total number of features used by the model',
        'The training time required by the model'
      ],
      correctIndex: 0,
      explanation:
        'ROC-AUC evaluates how well a classifier separates positive and negative classes across different decision thresholds.'
    },
    {
      id: 'ai-19',
      type: 'mcq',
      title: 'Decision Trees',
      prompt: 'What does a decision tree typically use to choose the best split?',
      options: [
        'Random guessing only',
        'Criteria such as Gini impurity, entropy, or information gain',
        'The alphabetical order of feature names',
        'The number of rows in the test set only'
      ],
      correctIndex: 1,
      explanation:
        'Decision trees select splits that improve class separation or reduce impurity using metrics like Gini impurity or entropy.'
    },
    {
      id: 'ai-20',
      type: 'mcq',
      title: 'Random Forest',
      prompt: 'Why does a Random Forest often generalize better than a single decision tree?',
      options: [
        'It uses only one feature at a time',
        'It removes the need for training data',
        'It combines many trees trained on different samples/features to reduce variance',
        'It always produces perfectly interpretable rules'
      ],
      correctIndex: 2,
      explanation:
        'Random Forest uses bagging and feature randomness to combine many trees, reducing variance and improving generalization.'
    },
    {
      id: 'ai-21',
      type: 'mcq',
      title: 'Gradient Boosting',
      prompt: 'How does gradient boosting generally build an ensemble?',
      options: [
        'By training all models independently and averaging them equally',
        'By training models sequentially so each new model corrects errors from previous models',
        'By using only unsupervised clustering models',
        'By replacing all weak learners with one neural network'
      ],
      correctIndex: 1,
      explanation:
        'Gradient boosting builds models sequentially, with each new learner focusing on the errors or residuals of earlier learners.'
    },
    {
      id: 'ai-22',
      type: 'mcq',
      title: 'K-Means Clustering',
      prompt: 'What is the main objective of K-Means clustering?',
      options: [
        'To assign data points to clusters by minimizing within-cluster distance to centroids',
        'To predict a continuous target variable',
        'To classify data using labeled examples',
        'To calculate the probability of a sentence'
      ],
      correctIndex: 0,
      explanation:
        'K-Means groups data into K clusters by assigning points to the nearest centroid and minimizing within-cluster variation.'
    },
    {
      id: 'ai-23',
      type: 'mcq',
      title: 'Dimensionality Reduction',
      prompt: 'What is the primary goal of Principal Component Analysis?',
      options: [
        'To increase the number of features',
        'To convert classification into regression',
        'To transform data into fewer components while preserving as much variance as possible',
        'To label unlabeled data manually'
      ],
      correctIndex: 2,
      explanation:
        'PCA reduces dimensionality by creating new components that capture the maximum variance in the data.'
    },
    {
      id: 'ai-24',
      type: 'mcq',
      title: 'Neural Networks',
      prompt: 'Why are activation functions used in neural networks?',
      options: [
        'To store training data inside the model',
        'To introduce non-linearity so the network can learn complex patterns',
        'To remove all outliers automatically',
        'To convert images into database rows'
      ],
      correctIndex: 1,
      explanation:
        'Activation functions introduce non-linearity, allowing neural networks to model complex relationships beyond simple linear patterns.'
    },
    {
      id: 'ai-25',
      type: 'mcq',
      title: 'Gradient Descent',
      prompt: 'What does the learning rate control during gradient descent?',
      options: [
        'The number of columns in the dataset',
        'The step size used when updating model parameters',
        'The number of target classes',
        'The amount of test data created'
      ],
      correctIndex: 1,
      explanation:
        'The learning rate controls how large each update step is. Too high can overshoot the optimum; too low can make training very slow.'
    },
    {
      id: 'ai-26',
      type: 'mcq',
      title: 'Convolutional Neural Networks',
      prompt: 'Why are Convolutional Neural Networks effective for image-related tasks?',
      options: [
        'They use shared filters to detect local spatial patterns such as edges, textures, and shapes',
        'They ignore pixel relationships completely',
        'They are designed only for tabular financial data',
        'They require no training data'
      ],
      correctIndex: 0,
      explanation:
        'CNNs use convolutional filters to capture local spatial patterns, making them highly effective for image classification, detection, and segmentation.'
    },
    {
      id: 'ai-27',
      type: 'mcq',
      title: 'Transformers',
      prompt: 'What is the main role of self-attention in Transformer models?',
      options: [
        'To permanently remove less frequent words from text',
        'To train only on image pixels',
        'To learn relationships between tokens by assigning attention weights to relevant parts of the sequence',
        'To replace all evaluation metrics'
      ],
      correctIndex: 2,
      explanation:
        'Self-attention allows Transformers to dynamically focus on relevant tokens in a sequence, enabling strong performance in language tasks.'
    },
    {
      id: 'ai-28',
      type: 'mcq',
      title: 'Embeddings',
      prompt: 'What are embeddings in the context of Machine Learning and NLP?',
      options: [
        'Random IDs assigned to each data record',
        'Dense numerical representations that capture semantic meaning or similarity',
        'A type of database backup',
        'A method for deleting stop words only'
      ],
      correctIndex: 1,
      explanation:
        'Embeddings represent items such as words, documents, users, or products as dense vectors where similar items are closer in vector space.'
    },
    {
      id: 'ai-29',
      type: 'mcq',
      title: 'RAG vs Fine-Tuning',
      prompt: 'Which statement best describes Retrieval-Augmented Generation?',
      options: [
        'It retrieves relevant external context at inference time and provides it to the model without necessarily changing model weights',
        'It always requires retraining the full model from scratch',
        'It is used only for image segmentation',
        'It prevents the model from using any external knowledge'
      ],
      correctIndex: 0,
      explanation:
        'RAG improves responses by retrieving relevant documents or knowledge at inference time and passing that context to the language model.'
    },
    {
      id: 'ai-30',
      type: 'mcq',
      title: 'MLOps and Model Monitoring',
      prompt: 'A model performs well during training but its production performance drops after several months because user behavior has changed. What is this called?',
      options: [
        'Cross-validation',
        'Hyperparameter tuning',
        'Model drift or data drift',
        'One-hot encoding'
      ],
      correctIndex: 2,
      explanation:
        'Model drift or data drift occurs when production data changes over time, causing model performance to degrade.'
    }
  ]
};