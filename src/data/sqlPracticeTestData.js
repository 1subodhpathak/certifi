export const PASS_SCORE = 90;
export const TEST_DURATION_SECONDS = 45 * 60;
export const TEST_NAME = 'SQL Coding Test';
export const SQL_DATABASE = [
  {
    name: 'customers',
    description: 'Registered marketplace customers and acquisition source.',
    columns: [
      ['customer_id', 'INTEGER', 'Primary key'],
      ['full_name', 'TEXT', 'Customer name'],
      ['signup_date', 'DATE', 'Registration date'],
      ['acquisition_channel', 'TEXT', 'Paid Search, Referral, Organic, Partner'],
      ['country', 'TEXT', 'ISO country name'],
    ],
    sampleRows: [
      ['1001', 'Aarav Mehta', '2026-01-04', 'Referral', 'India'],
      ['1002', 'Mia Chen', '2026-01-07', 'Paid Search', 'Singapore'],
      ['1003', 'Noah Williams', '2026-01-08', 'Organic', 'United States'],
    ],
  },
  {
    name: 'orders',
    description: 'Order headers. Canceled orders should not count as revenue.',
    columns: [
      ['order_id', 'INTEGER', 'Primary key'],
      ['customer_id', 'INTEGER', 'Foreign key to customers'],
      ['session_id', 'INTEGER', 'Checkout session that produced the order'],
      ['order_date', 'TIMESTAMP', 'Order creation time'],
      ['status', 'TEXT', 'completed, canceled, refunded'],
    ],
    sampleRows: [
      ['7001', '1001', '9001', '2026-01-11 10:14', 'completed'],
      ['7002', '1001', '9008', '2026-01-25 19:40', 'completed'],
      ['7003', '1002', '9011', '2026-02-03 08:35', 'canceled'],
    ],
  },
  {
    name: 'order_items',
    description: 'Line items for every order.',
    columns: [
      ['order_item_id', 'INTEGER', 'Primary key'],
      ['order_id', 'INTEGER', 'Foreign key to orders'],
      ['product_id', 'INTEGER', 'Foreign key to products'],
      ['quantity', 'INTEGER', 'Units purchased'],
      ['unit_price', 'NUMERIC', 'Unit sale price'],
    ],
    sampleRows: [
      ['1', '7001', '501', '2', '59.00'],
      ['2', '7001', '502', '1', '199.00'],
      ['3', '7002', '501', '1', '59.00'],
    ],
  },
  {
    name: 'products',
    description: 'Product catalog and business category.',
    columns: [
      ['product_id', 'INTEGER', 'Primary key'],
      ['category', 'TEXT', 'Business category'],
      ['product_name', 'TEXT', 'Display name'],
      ['launch_date', 'DATE', 'Launch date'],
    ],
    sampleRows: [
      ['501', 'Productivity', 'FocusFlow Pro', '2025-11-01'],
      ['502', 'Developer Tools', 'QueryPilot', '2025-12-15'],
      ['503', 'Security', 'AccessGuard', '2026-01-09'],
    ],
  },
  {
    name: 'logins',
    description: 'One row for every successful user login.',
    columns: [
      ['user_id', 'INTEGER', 'User identifier'],
      ['login_date', 'DATE', 'Calendar date of login'],
      ['device_type', 'TEXT', 'web, ios, android'],
    ],
    sampleRows: [
      ['1001', '2026-02-01', 'ios'],
      ['1001', '2026-02-02', 'ios'],
      ['1001', '2026-02-03', 'web'],
    ],
  },
  {
    name: 'sellers',
    description: 'Marketplace sellers.',
    columns: [
      ['seller_id', 'INTEGER', 'Primary key'],
      ['seller_name', 'TEXT', 'Seller display name'],
      ['region', 'TEXT', 'Operating region'],
    ],
    sampleRows: [
      ['301', 'Northstar Labs', 'APAC'],
      ['302', 'ScaleMarket', 'NA'],
      ['303', 'Vector Retail', 'EMEA'],
    ],
  },
  {
    name: 'listings',
    description: 'Seller listings. A product can be listed by multiple sellers.',
    columns: [
      ['listing_id', 'INTEGER', 'Primary key'],
      ['seller_id', 'INTEGER', 'Foreign key to sellers'],
      ['product_id', 'INTEGER', 'Foreign key to products'],
      ['listed_at', 'TIMESTAMP', 'Listing creation timestamp'],
    ],
    sampleRows: [
      ['8101', '301', '501', '2026-01-03 11:00'],
      ['8102', '301', '502', '2026-01-04 09:20'],
      ['8103', '302', '503', '2026-01-05 16:45'],
    ],
  },
  {
    name: 'sessions',
    description: 'Browsing and checkout sessions.',
    columns: [
      ['session_id', 'INTEGER', 'Primary key'],
      ['customer_id', 'INTEGER', 'Foreign key to customers'],
      ['started_at', 'TIMESTAMP', 'Session start'],
      ['device_type', 'TEXT', 'web, ios, android'],
      ['checkout_seconds', 'INTEGER', 'Seconds from checkout start to order submit'],
    ],
    sampleRows: [
      ['9001', '1001', '2026-01-11 10:02', 'ios', '186'],
      ['9008', '1001', '2026-01-25 19:32', 'web', '244'],
      ['9011', '1002', '2026-02-03 08:21', 'android', '512'],
    ],
  },
];

export const SQL_QUESTIONS = [
  // --- 1-10: ANALYTICS & RETENTION (Hard/Medium) ---
  {
    id: 'sql-retention',
    title: '30-Day Repeat Purchase Retention',
    difficulty: 'Hard',
    category: 'Analytics',
    estimatedMinutes: 9,
    points: 20,
    tables: ['customers', 'orders'],
    concepts: ['CTE', 'self join', 'date interval', 'retention rate'],
    context: 'You are an analytics engineer working for a growing marketplace. The growth team needs to understand how well different acquisition channels retain customers over their first month.',
    prompt: 'Write a SQL Query to calculate the 30-day repeat purchase retention by acquisition_channel. For customers whose first completed order happened on or after 2026-01-01, a retained customer is one who has another completed order more than 0 days and no more than 30 days after their first completed order.',
    expectedOutput: 'Return acquisition_channel, cohort_customers, retained_customers, retention_rate. Sort by highest retention_rate.',
    rubric: [
      { label: 'Finds first completed order per customer', points: 4, all: [/\bmin\s*\(/, /first_?order|first_?purchase|first_?completed/] },
      { label: 'Compares a later completed order against the first order', points: 4, all: [/join\s+orders|orders\s+\w+\s+join/, /order_date\s*>|>\s*\w+\.first_?order/] },
      { label: 'Applies the 30-day repeat window', points: 5, any: [/interval\s+'?30\s+days?'?/, /datediff\s*\(/, /dateadd\s*\(/, /between\s+.*30/] },
      { label: 'Groups by acquisition channel with distinct customer counts', points: 4, all: [/group\s+by[^;]*acquisition_channel/, /count\s*\(\s*distinct/] },
      { label: 'Calculates a safe percentage retention rate', points: 3, any: [/nullif\s*\(/, /::numeric/, /cast\s*\(/, /round\s*\(/, /100\.0|100\s*\*/] },
    ],
    solution: `WITH first_orders AS (
  SELECT customer_id, MIN(order_date) AS first_order_date
  FROM orders WHERE status = 'completed'
  GROUP BY customer_id
),
repeat_buyers AS (
  SELECT f.customer_id
  FROM first_orders f
  JOIN orders o ON o.customer_id = f.customer_id
   AND o.status = 'completed'
   AND o.order_date > f.first_order_date
   AND o.order_date <= f.first_order_date + INTERVAL '30 days'
  GROUP BY f.customer_id
)
SELECT
  c.acquisition_channel,
  COUNT(DISTINCT f.customer_id) AS cohort_customers,
  COUNT(DISTINCT r.customer_id) AS retained_customers,
  ROUND(COUNT(DISTINCT r.customer_id)::numeric / NULLIF(COUNT(DISTINCT f.customer_id), 0) * 100, 2) AS retention_rate
FROM first_orders f
JOIN customers c ON c.customer_id = f.customer_id
LEFT JOIN repeat_buyers r ON r.customer_id = f.customer_id
WHERE f.first_order_date >= DATE '2026-01-01'
GROUP BY c.acquisition_channel
ORDER BY retention_rate DESC;`,
  },
  {
    id: 'sql-churn',
    title: 'Monthly Active User Churn',
    difficulty: 'Hard',
    category: 'Analytics',
    estimatedMinutes: 10,
    points: 20,
    tables: ['logins'],
    concepts: ['CTE', 'Full Outer Join', 'Churn Rate'],
    context: 'The product team wants to measure Month-over-Month (MoM) user churn. A churned user is one who was active (logged in) in Month N but not in Month N+1.',
    prompt: 'Calculate the churn rate for each month in 2026. Churn rate = (Users in Month N who did not log in in Month N+1) / (Total Users in Month N).',
    expectedOutput: 'Return month, active_users, churned_users, churn_rate.',
    rubric: [
      { label: 'Extracts month from login date', points: 4, any: [/extract\s*\(\s*month/, /date_trunc\s*\(\s*'month'/] },
      { label: 'Identifies users active in each month', points: 4, all: [/group\s+by/, /user_id/, /month/] },
      { label: 'Self-joins or uses lead/lag to find month-to-month activity', points: 6, any: [/left\s+join/, /lead\s*\(/, /lag\s*\(/, /full\s+outer\s+join/] },
      { label: 'Calculates churn rate correctly', points: 6, all: [/count\s*\(/, /::numeric/, /\//] },
    ],
    solution: `WITH monthly_users AS (
  SELECT DISTINCT user_id, DATE_TRUNC('month', login_date) AS active_month
  FROM logins WHERE login_date >= '2026-01-01' AND login_date < '2027-01-01'
)
SELECT 
  m1.active_month AS month,
  COUNT(m1.user_id) AS active_users,
  COUNT(m1.user_id) - COUNT(m2.user_id) AS churned_users,
  ROUND((COUNT(m1.user_id) - COUNT(m2.user_id))::numeric / COUNT(m1.user_id) * 100, 2) AS churn_rate
FROM monthly_users m1
LEFT JOIN monthly_users m2 
  ON m1.user_id = m2.user_id 
  AND m2.active_month = m1.active_month + INTERVAL '1 month'
GROUP BY 1 ORDER BY 1;`,
  },
  {
    id: 'sql-lrc',
    title: 'Low-Revenue Customers',
    difficulty: 'Easy',
    category: 'Reporting',
    estimatedMinutes: 5,
    points: 10,
    tables: ['customers', 'orders', 'order_items'],
    concepts: ['Joins', 'Sum', 'Having'],
    context: 'The marketing team wants to identify customers who have spent less than $100 in total across all completed orders.',
    prompt: 'Find all customers (full name and email) who have a total lifetime spend of less than $100. Only consider completed orders.',
    expectedOutput: 'Return full_name, email, total_spend. Sort by total_spend ascending.',
    rubric: [
      { label: 'Joins customers, orders, and order_items', points: 3, all: [/join\s+orders/, /join\s+order_items/] },
      { label: 'Filters for completed orders', points: 2, all: [/status\s*=\s*'completed'/] },
      { label: 'Groups by customer and uses HAVING', points: 3, all: [/group\s+by/, /having\s+sum\s*\(/, /<\s*100/] },
      { label: 'Calculates total spend correctly', points: 2, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT c.full_name, c.email, SUM(oi.quantity * oi.unit_price) AS total_spend
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status = 'completed'
GROUP BY c.customer_id, c.full_name, c.email
HAVING SUM(oi.quantity * oi.unit_price) < 100
ORDER BY total_spend ASC;`,
  },
  {
    id: 'sql-top-products',
    title: 'Top Products by Category Revenue',
    difficulty: 'Medium',
    category: 'Reporting',
    estimatedMinutes: 8,
    points: 20,
    tables: ['orders', 'order_items', 'products'],
    concepts: ['joins', 'window ranking', 'revenue aggregation'],
    context: 'The finance and merchandising teams want to identify the flagship products driving revenue in each business category for the first quarter.',
    prompt: 'Write a SQL Query to find the top 3 products by completed-order revenue within each category for Q1 2026. Revenue is quantity * unit_price. Canceled and refunded orders must be excluded.',
    expectedOutput: 'Return category, product_id, product_name, revenue, category_rank. Sort by category and category_rank.',
    rubric: [
      { label: 'Joins orders, order_items, and products', points: 4, all: [/join\s+order_items|order_items\s+\w+\s+join/, /join\s+products|products\s+\w+\s+join/] },
      { label: 'Filters to completed Q1 2026 orders', points: 4, all: [/status\s*=\s*'completed'|status\s*=\s*"completed"/, /2026-01-01|2026-04-01|q1/] },
      { label: 'Calculates revenue from quantity and unit_price', points: 4, all: [/sum\s*\(/, /quantity\s*\*\s*unit_price|unit_price\s*\*\s*quantity/] },
      { label: 'Ranks products inside each category', points: 5, all: [/(dense_rank|row_number|rank)\s*\(/, /partition\s+by[^;]*category/] },
      { label: 'Keeps only the top 3 per category', points: 3, any: [/category_rank\s*<=\s*3/, /rank\s*<=\s*3/, /where\s+.*<=\s*3/] },
    ],
    solution: `WITH product_revenue AS (
  SELECT p.category, p.product_id, p.product_name, SUM(oi.quantity * oi.unit_price) AS revenue
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.order_id
  JOIN products p ON p.product_id = oi.product_id
  WHERE o.status = 'completed' AND o.order_date >= '2026-01-01' AND o.order_date < '2026-04-01'
  GROUP BY 1, 2, 3
),
ranked AS (
  SELECT *, DENSE_RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS category_rank
  FROM product_revenue
)
SELECT category, product_id, product_name, revenue, category_rank FROM ranked WHERE category_rank <= 3
ORDER BY category, category_rank;`,
  },
  {
    id: 'sql-login-streak',
    title: 'Consecutive Login Streaks',
    difficulty: 'Hard',
    category: 'Product Analytics',
    estimatedMinutes: 10,
    points: 20,
    tables: ['logins'],
    concepts: ['gaps and islands', 'ROW_NUMBER', 'HAVING'],
    context: 'User engagement is a key metric. We want to identify highly engaged users by looking at their consecutive daily login streaks.',
    prompt: 'Write a SQL Query to identify users who logged in for at least 3 consecutive calendar days in 2026. Multiple logins on the same date should count as one day.',
    expectedOutput: 'Return user_id, streak_start, streak_end, streak_days. Sort by longest streak, then user_id.',
    rubric: [
      { label: 'Deduplicates multiple logins per user per day', points: 4, all: [/distinct/, /user_id/, /login_date|login_day/] },
      { label: 'Uses a gaps-and-islands technique', points: 5, any: [/row_number\s*\(/, /lag\s*\(/, /login_day\s*-\s*/, /date_diff|datediff/] },
      { label: 'Partitions sequence logic by user', points: 4, all: [/partition\s+by[^;]*user_id/, /order\s+by[^;]*login/] },
      { label: 'Aggregates streak start, end, and length', points: 4, all: [/min\s*\(/, /max\s*\(/, /count\s*\(/] },
      { label: 'Filters to streaks of at least 3 days', points: 3, any: [/having\s+count\s*\([^)]*\)\s*>=\s*3/, /streak_days\s*>=\s*3/] },
    ],
    solution: `WITH daily_logins AS (
  SELECT DISTINCT user_id, login_date::date AS login_day
  FROM logins WHERE login_date >= '2026-01-01' AND login_date < '2027-01-01'
),
numbered AS (
  SELECT user_id, login_day, login_day - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_day)::int AS streak_group
  FROM daily_logins
)
SELECT user_id, MIN(login_day) AS streak_start, MAX(login_day) AS streak_end, COUNT(*) AS streak_days
FROM numbered GROUP BY user_id, streak_group HAVING COUNT(*) >= 3
ORDER BY streak_days DESC, user_id;`,
  },
  {
    id: 'sql-median-revenue',
    title: 'Median Order Value',
    difficulty: 'Hard',
    category: 'Finance',
    estimatedMinutes: 10,
    points: 20,
    tables: ['orders', 'order_items'],
    concepts: ['Window Functions', 'Percentile'],
    context: 'The CFO wants to know the Median Order Value (MOV) for completed orders, as it is less sensitive to outliers than the average.',
    prompt: 'Calculate the median total revenue for all completed orders in 2026.',
    expectedOutput: 'Return a single value median_order_value.',
    rubric: [
      { label: 'Calculates total revenue per order', points: 5, all: [/sum\s*\(/, /group\s+by\s+order_id/] },
      { label: 'Uses percentile_cont or window median logic', points: 10, any: [/percentile_cont\s*\(\s*0\.5\)/, /row_number\s*\(/, /count\s*\(/] },
      { label: 'Filters for completed orders in 2026', points: 5, all: [/status\s*=\s*'completed'/, /2026/] },
    ],
    solution: `WITH order_revenue AS (
  SELECT o.order_id, SUM(oi.quantity * oi.unit_price) AS total_revenue
  FROM orders o JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status = 'completed' AND o.order_date >= '2026-01-01' AND o.order_date < '2027-01-01'
  GROUP BY o.order_id
)
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY total_revenue) AS median_order_value
FROM order_revenue;`,
  },
  {
    id: 'sql-first-referral',
    title: 'First Referral Conversion',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 7,
    points: 15,
    tables: ['customers', 'orders'],
    concepts: ['Joins', 'Filtering', 'Date Comparison'],
    context: 'Marketing wants to know how many customers who signed up via "Referral" placed their first completed order within 7 days of signup.',
    prompt: 'Find the count of Referral customers whose first completed order was within 7 days of their signup_date.',
    expectedOutput: 'Return a single count value conversion_count.',
    rubric: [
      { label: 'Filters for Referral channel', points: 3, all: [/acquisition_channel\s*=\s*'Referral'/] },
      { label: 'Finds the first order date per customer', points: 5, all: [/min\s*\(\s*order_date\s*\)/] },
      { label: 'Compares order date to signup date', points: 4, all: [/signup_date/, /<=\s*7/, /interval\s+'7\s+days'/] },
      { label: 'Counts distinct customers', points: 3, all: [/count\s*\(\s*distinct/] },
    ],
    solution: `WITH first_orders AS (
  SELECT customer_id, MIN(order_date) AS first_order
  FROM orders WHERE status = 'completed' GROUP BY customer_id
)
SELECT COUNT(DISTINCT c.customer_id) AS conversion_count
FROM customers c
JOIN first_orders f ON c.customer_id = f.customer_id
WHERE c.acquisition_channel = 'Referral'
  AND f.first_order <= c.signup_date + INTERVAL '7 days';`,
  },
  {
    id: 'sql-session-conversion',
    title: 'Device Conversion Rate',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sessions', 'orders'],
    concepts: ['Joins', 'Grouping', 'Division'],
    context: 'The product team is comparing checkout conversion rates across different devices.',
    prompt: 'Calculate the session-to-order conversion rate for each device_type. Conversion rate = (Sessions that resulted in a completed order) / (Total Sessions).',
    expectedOutput: 'Return device_type, total_sessions, total_orders, conversion_rate. Sort by conversion_rate DESC.',
    rubric: [
      { label: 'Groups by device_type', points: 3, all: [/group\s+by\s+device_type/] },
      { label: 'Counts total sessions and total orders', points: 6, all: [/count\s*\(\s*session_id\s*\)/, /count\s*\(\s*order_id\s*\)/] },
      { label: 'Correctly calculates conversion rate', points: 6, all: [/::numeric/, /\//] },
    ],
    solution: `SELECT 
  s.device_type,
  COUNT(s.session_id) AS total_sessions,
  COUNT(o.order_id) AS total_orders,
  ROUND(COUNT(o.order_id)::numeric / COUNT(s.session_id) * 100, 2) AS conversion_rate
FROM sessions s
LEFT JOIN orders o ON s.session_id = o.session_id AND o.status = 'completed'
GROUP BY 1 ORDER BY 4 DESC;`,
  },
  {
    id: 'sql-dormant-users',
    title: 'Dormant High Spenders',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 8,
    points: 15,
    tables: ['customers', 'orders', 'order_items'],
    concepts: ['Joins', 'Aggregation', 'Date Comparison'],
    context: 'Identify valuable customers who have stopped buying. A dormant high spender is someone who has spent > $500 in total but has not placed a completed order in the last 60 days.',
    prompt: 'Find all customers (name and email) who have spent more than $500 lifetime but have not had a completed order since 2026-03-01.',
    expectedOutput: 'Return full_name, email, total_spend, last_order_date.',
    rubric: [
      { label: 'Calculates total spend per customer', points: 5, all: [/sum\s*\(/, /group\s+by/] },
      { label: 'Finds the last order date per customer', points: 4, all: [/max\s*\(\s*order_date\s*\)/] },
      { label: 'Filters by total spend > 500', points: 3, all: [/>\s*500/] },
      { label: 'Filters by last order date < 2026-03-01', points: 3, all: [/<\s*'2026-03-01'/] },
    ],
    solution: `SELECT c.full_name, c.email, SUM(oi.quantity * oi.unit_price) AS total_spend, MAX(o.order_date) AS last_order_date
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status = 'completed'
GROUP BY c.customer_id, c.full_name, c.email
HAVING SUM(oi.quantity * oi.unit_price) > 500 AND MAX(o.order_date) < '2026-03-01';`,
  },
  {
    id: 'sql-regional-revenue',
    title: 'Regional Revenue Concentration',
    difficulty: 'Medium',
    category: 'Operations',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sellers', 'listings', 'order_items', 'orders'],
    concepts: ['Multi-way Joins', 'Grouping'],
    context: 'Operations wants to know which region is contributing the most to total completed order revenue.',
    prompt: 'List the total completed order revenue by seller region.',
    expectedOutput: 'Return region, total_revenue. Sort by revenue DESC.',
    rubric: [
      { label: 'Joins sellers, listings, order_items, and orders', points: 6, all: [/join\s+listings/, /join\s+order_items/, /join\s+orders/] },
      { label: 'Filters for completed orders', points: 3, all: [/status\s*=\s*'completed'/] },
      { label: 'Groups by region and sums revenue', points: 6, all: [/group\s+by\s+region/, /sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT s.region, SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM sellers s
JOIN listings l ON s.seller_id = l.seller_id
JOIN order_items oi ON l.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY s.region ORDER BY total_revenue DESC;`,
  },

  // --- 11-20: INVENTORY & SELLERS (Medium/Easy) ---
  {
    id: 'sql-unlisted-products',
    title: 'Unlisted Products',
    difficulty: 'Easy',
    category: 'Inventory',
    estimatedMinutes: 5,
    points: 10,
    tables: ['products', 'listings'],
    concepts: ['Left Join', 'IS NULL'],
    context: 'Merchandising wants to see which products in the catalog are not currently listed by any seller.',
    prompt: 'Find all products (ID and name) that do not have any entries in the listings table.',
    expectedOutput: 'Return product_id, product_name.',
    rubric: [
      { label: 'Uses LEFT JOIN products to listings', points: 4, all: [/left\s+join\s+listings/] },
      { label: 'Filters for missing listings using IS NULL', points: 6, all: [/listing_id\s+is\s+null|l\.product_id\s+is\s+null/] },
    ],
    solution: `SELECT p.product_id, p.product_name FROM products p
LEFT JOIN listings l ON p.product_id = l.product_id
WHERE l.listing_id IS NULL;`,
  },
  {
    id: 'sql-seller-product-count',
    title: 'Seller Inventory Size',
    difficulty: 'Easy',
    category: 'Inventory',
    estimatedMinutes: 5,
    points: 10,
    tables: ['sellers', 'listings'],
    concepts: ['Joins', 'Count Distinct'],
    context: 'Find which sellers have the largest variety of products.',
    prompt: 'List each seller name and the number of unique products they have listed.',
    expectedOutput: 'Return seller_name, unique_products. Sort by product count DESC.',
    rubric: [
      { label: 'Joins sellers and listings', points: 3, all: [/join\s+listings/] },
      { label: 'Counts unique product_ids per seller', points: 4, all: [/count\s*\(\s*distinct\s+product_id\s*\)/] },
      { label: 'Groups and sorts correctly', points: 3, all: [/group\s+by/, /order\s+by.*desc/] },
    ],
    solution: `SELECT s.seller_name, COUNT(DISTINCT l.product_id) AS unique_products
FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
GROUP BY s.seller_name ORDER BY unique_products DESC;`,
  },
  {
    id: 'sql-slow-checkout',
    title: 'Slow Checkout Analysis',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 7,
    points: 15,
    tables: ['sessions'],
    concepts: ['Average', 'Conditionals'],
    context: 'Product is investigating if specific devices have slower checkout times.',
    prompt: 'Calculate the average checkout_seconds for sessions that resulted in an order (where checkout_seconds is not null), grouped by device_type.',
    expectedOutput: 'Return device_type, avg_checkout_time.',
    rubric: [
      { label: 'Filters for non-null checkout_seconds', points: 4, all: [/is\s+not\s+null/] },
      { label: 'Calculates average checkout_seconds', points: 6, all: [/avg\s*\(\s*checkout_seconds\s*\)/] },
      { label: 'Groups by device_type', points: 5, all: [/group\s+by\s+device_type/] },
    ],
    solution: `SELECT device_type, AVG(checkout_seconds) AS avg_checkout_time
FROM sessions WHERE checkout_seconds IS NOT NULL GROUP BY device_type;`,
  },
  {
    id: 'sql-repeat-products',
    title: 'Repeat Purchase Products',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['orders', 'order_items'],
    concepts: ['Grouping', 'Having', 'Count'],
    context: 'Identify products that are frequently bought more than once by the same customer.',
    prompt: 'Find products that have been bought by the same customer in at least two different completed orders.',
    expectedOutput: 'Return customer_id, product_id, order_count. Sort by order_count DESC.',
    rubric: [
      { label: 'Joins orders and order_items', points: 3, all: [/join\s+order_items/] },
      { label: 'Groups by customer and product', points: 4, all: [/group\s+by\s+customer_id\s*,\s*product_id/] },
      { label: 'Counts distinct order_ids', points: 4, all: [/count\s*\(\s*distinct\s+order_id\s*\)/] },
      { label: 'Filters for order_count >= 2', points: 4, all: [/having\s+count\s*\([^)]*\)\s*>=\s*2/] },
    ],
    solution: `SELECT o.customer_id, oi.product_id, COUNT(DISTINCT o.order_id) AS order_count
FROM orders o JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status = 'completed'
GROUP BY o.customer_id, oi.product_id HAVING COUNT(DISTINCT o.order_id) >= 2
ORDER BY order_count DESC;`,
  },
  {
    id: 'sql-new-product-revenue',
    title: 'New Product Revenue Impact',
    difficulty: 'Medium',
    category: 'Finance',
    estimatedMinutes: 8,
    points: 15,
    tables: ['products', 'order_items', 'orders'],
    concepts: ['Joins', 'Date Filter'],
    context: 'Finance wants to know the total revenue generated by products launched after 2026-01-01.',
    prompt: 'Calculate total revenue for products where launch_date >= 2026-01-01.',
    expectedOutput: 'Return product_name, total_revenue.',
    rubric: [
      { label: 'Joins products and order_items', points: 4, all: [/join\s+order_items/] },
      { label: 'Filters for launch_date >= 2026-01-01', points: 5, all: [/launch_date\s*>=\s*'2026-01-01'/] },
      { label: 'Aggregates revenue correctly', points: 6, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT p.product_name, SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM products p JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id WHERE o.status = 'completed' AND p.launch_date >= '2026-01-01'
GROUP BY p.product_name;`,
  },
  {
    id: 'sql-daily-revenue-trend',
    title: 'Daily Revenue Trend',
    difficulty: 'Medium',
    category: 'Reporting',
    estimatedMinutes: 7,
    points: 15,
    tables: ['orders', 'order_items'],
    concepts: ['Grouping', 'Date Truncation'],
    context: 'Executive team needs a daily breakdown of completed revenue.',
    prompt: 'Calculate the total revenue for every day in February 2026.',
    expectedOutput: 'Return order_day, daily_revenue. Sort by day.',
    rubric: [
      { label: 'Truncates date to day', points: 4, any: [/date_trunc/, /::date/, /extract/] },
      { label: 'Filters for February 2026', points: 5, all: [/2026-02-01/, /2026-03-01/] },
      { label: 'Sums revenue correctly', points: 6, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT o.order_date::date AS order_day, SUM(oi.quantity * oi.unit_price) AS daily_revenue
FROM orders o JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status = 'completed' AND o.order_date >= '2026-02-01' AND o.order_date < '2026-03-01'
GROUP BY 1 ORDER BY 1;`,
  },
  {
    id: 'sql-inactive-referrals',
    title: 'Inactive Referral Accounts',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 8,
    points: 15,
    tables: ['customers', 'orders'],
    concepts: ['Subquery', 'NOT IN', 'Filtering'],
    context: 'Marketing wants to identify customers who signed up via referral but never placed an order.',
    prompt: 'Find all customer names who signed up via "Referral" but have zero orders in the orders table.',
    expectedOutput: 'Return full_name.',
    rubric: [
      { label: 'Filters for Referral channel', points: 3, all: [/acquisition_channel\s*=\s*'Referral'/] },
      { label: 'Uses NOT IN or NOT EXISTS or LEFT JOIN for exclusion', points: 7, any: [/not\s+in/, /not\s+exists/, /left\s+join.*is\s+null/] },
      { label: 'Queries customers table correctly', points: 5, all: [/from\s+customers/] },
    ],
    solution: `SELECT full_name FROM customers WHERE acquisition_channel = 'Referral'
AND customer_id NOT IN (SELECT customer_id FROM orders);`,
  },
  {
    id: 'sql-average-session-time',
    title: 'Average Browsing Time',
    difficulty: 'Easy',
    category: 'Product',
    estimatedMinutes: 5,
    points: 10,
    tables: ['sessions'],
    concepts: ['Average'],
    context: 'What is the average time users spend in a session before checking out?',
    prompt: 'Calculate the average checkout_seconds across all sessions where checkout occurred.',
    expectedOutput: 'Return avg_time.',
    rubric: [
      { label: 'Uses AVG function', points: 5, all: [/avg\s*\(/] },
      { label: 'Filters for non-null checkout_seconds', points: 5, all: [/is\s+not\s+null/] },
    ],
    solution: `SELECT AVG(checkout_seconds) AS avg_time FROM sessions WHERE checkout_seconds IS NOT NULL;`,
  },
  {
    id: 'sql-seller-region-performance',
    title: 'High Performance Regions',
    difficulty: 'Medium',
    category: 'Operations',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sellers', 'listings', 'order_items'],
    concepts: ['Aggregation', 'Filtering'],
    context: 'Find regions where total sold quantity exceeds 100 units.',
    prompt: 'List regions and their total quantity sold, only for regions with more than 100 total units sold.',
    expectedOutput: 'Return region, total_quantity.',
    rubric: [
      { label: 'Joins sellers, listings, and order_items', points: 5, all: [/join\s+listings/, /join\s+order_items/] },
      { label: 'Sums quantity per region', points: 5, all: [/sum\s*\(\s*quantity\s*\)/] },
      { label: 'Filters using HAVING > 100', points: 5, all: [/having\s+sum\s*\(\s*quantity\s*\)\s*>\s*100/] },
    ],
    solution: `SELECT s.region, SUM(oi.quantity) AS total_quantity
FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
JOIN order_items oi ON l.product_id = oi.product_id
GROUP BY s.region HAVING SUM(oi.quantity) > 100;`,
  },
  {
    id: 'sql-multichannel-users',
    title: 'Multichannel Signup Check',
    difficulty: 'Easy',
    category: 'Marketing',
    estimatedMinutes: 5,
    points: 10,
    tables: ['customers'],
    concepts: ['Filtering', 'Count'],
    context: 'Marketing wants to know the distribution of our customers across signup channels.',
    prompt: 'Count how many customers we have for each acquisition_channel.',
    expectedOutput: 'Return acquisition_channel, user_count. Sort by count DESC.',
    rubric: [
      { label: 'Groups by acquisition_channel', points: 4, all: [/group\s+by\s+acquisition_channel/] },
      { label: 'Counts records correctly', points: 6, all: [/count\s*\(\s*\*\s*\)/] },
    ],
    solution: `SELECT acquisition_channel, COUNT(*) AS user_count FROM customers GROUP BY 1 ORDER BY 2 DESC;`,
  },

  // --- 21-30: USER BEHAVIOR & SESSIONS (Medium/Hard) ---
  {
    id: 'sql-weekend-warriors',
    title: 'Weekend Login Preference',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['logins'],
    concepts: ['Date Extraction', 'Aggregation'],
    context: 'Product wants to know if users log in more on weekends (Saturday/Sunday) or weekdays.',
    prompt: 'Compare total logins on Weekends vs Weekdays in 2026.',
    expectedOutput: 'Return day_type (Weekend/Weekday), login_count.',
    rubric: [
      { label: 'Extracts day of week', points: 5, any: [/extract\s*\(\s*dow/, /to_char/, /date_part/] },
      { label: 'Uses CASE to categorize day_type', points: 6, all: [/case/, /when/, /else/] },
      { label: 'Counts logins correctly', points: 4, all: [/count\s*\(\s*\*\s*\)/] },
    ],
    solution: `SELECT 
  CASE WHEN EXTRACT(DOW FROM login_date) IN (0, 6) THEN 'Weekend' ELSE 'Weekday' END AS day_type,
  COUNT(*) AS login_count
FROM logins WHERE login_date >= '2026-01-01' AND login_date < '2027-01-01'
GROUP BY 1;`,
  },
  {
    id: 'sql-session-depth',
    title: 'User Session Depth',
    difficulty: 'Easy',
    category: 'Product',
    estimatedMinutes: 5,
    points: 10,
    tables: ['sessions'],
    concepts: ['Average', 'Grouping'],
    context: 'On average, how many sessions does each customer have?',
    prompt: 'Find the average number of sessions per customer.',
    expectedOutput: 'Return avg_sessions_per_customer.',
    rubric: [
      { label: 'Counts sessions per customer first', points: 5, all: [/count\s*\(\s*session_id\s*\)/, /group\s+by\s+customer_id/] },
      { label: 'Calculates average of those counts', points: 5, all: [/avg\s*\(/] },
    ],
    solution: `WITH customer_sessions AS (
  SELECT customer_id, COUNT(session_id) as s_count FROM sessions GROUP BY customer_id
)
SELECT AVG(s_count) AS avg_sessions_per_customer FROM customer_sessions;`,
  },
  {
    id: 'sql-first-last-login',
    title: 'Active Lifecycle Duration',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 7,
    points: 15,
    tables: ['logins'],
    concepts: ['Aggregation', 'Date Diff'],
    context: 'Find the time span between a user\'s first and last login.',
    prompt: 'For each user, calculate the number of days between their first and last login in the dataset.',
    expectedOutput: 'Return user_id, lifecycle_days. Sort by longest lifecycle.',
    rubric: [
      { label: 'Finds MIN and MAX login date', points: 6, all: [/min\s*\(/, /max\s*\(/] },
      { label: 'Calculates day difference', points: 9, all: [/max\s*\(.*?\)\s*-\s*min\s*\(.*?\)/] },
    ],
    solution: `SELECT user_id, MAX(login_date)::date - MIN(login_date)::date AS lifecycle_days
FROM logins GROUP BY user_id ORDER BY 2 DESC;`,
  },
  {
    id: 'sql-mobile-exclusive',
    title: 'Mobile Exclusive Users',
    difficulty: 'Hard',
    category: 'Product',
    estimatedMinutes: 9,
    points: 20,
    tables: ['logins'],
    concepts: ['Grouping', 'Filtering', 'Case When'],
    context: 'Find users who have only ever logged in using mobile devices (ios or android) and never via web.',
    prompt: 'Identify user_ids who have logged in via ios or android but never via web.',
    expectedOutput: 'Return user_id.',
    rubric: [
      { label: 'Identifies users with mobile logins', points: 6, all: [/device_type\s+in\s*\(\s*'ios'\s*,\s*'android'\s*\)/] },
      { label: 'Ensures zero web logins', points: 10, any: [/not\s+in/, /having\s+count\s*\(.*web.*\)\s*=\s*0/, /not\s+exists/] },
      { label: 'Correct grouping/aggregation', points: 4, all: [/group\s+by\s+user_id/] },
    ],
    solution: `SELECT user_id FROM logins
GROUP BY user_id
HAVING COUNT(CASE WHEN device_type = 'web' THEN 1 END) = 0
   AND COUNT(CASE WHEN device_type IN ('ios', 'android') THEN 1 END) > 0;`,
  },
  {
    id: 'sql-high-frequency-logins',
    title: 'Power Users',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['logins'],
    concepts: ['Aggregation', 'Filtering'],
    context: 'Power users are those who log in on more than 10 different days in a month.',
    prompt: 'Find users who logged in on more than 10 distinct days in January 2026.',
    expectedOutput: 'Return user_id, distinct_days.',
    rubric: [
      { label: 'Filters for January 2026', points: 4, all: [/2026-01-01/, /2026-02-01/] },
      { label: 'Counts distinct login days', points: 6, all: [/count\s*\(\s*distinct\s+login_date\s*\)/] },
      { label: 'Filters for > 10 using HAVING', points: 5, all: [/having\s+count\s*\([^)]*\)\s*>\s*10/] },
    ],
    solution: `SELECT user_id, COUNT(DISTINCT login_date) AS distinct_days
FROM logins WHERE login_date >= '2026-01-01' AND login_date < '2026-02-01'
GROUP BY user_id HAVING COUNT(DISTINCT login_date) > 10;`,
  },
  {
    id: 'sql-checkout-funnel',
    title: 'Checkout Funnel Dropoff',
    difficulty: 'Hard',
    category: 'Product',
    estimatedMinutes: 10,
    points: 20,
    tables: ['sessions', 'orders'],
    concepts: ['Left Join', 'Conditional Count'],
    context: 'Analyze the dropoff from session to checkout start to completed order.',
    prompt: 'Calculate: 1. Total Sessions, 2. Sessions that started checkout (checkout_seconds is not null), 3. Sessions that resulted in completed orders.',
    expectedOutput: 'Return total_sessions, checkout_starts, completed_orders.',
    rubric: [
      { label: 'Counts all sessions', points: 5, all: [/count\s*\(\s*\*\s*\)/] },
      { label: 'Counts sessions with checkout_seconds', points: 7, all: [/count\s*\(\s*checkout_seconds\s*\)/] },
      { label: 'Counts matched completed orders', points: 8, all: [/left\s+join\s+orders/, /status\s*=\s*'completed'/] },
    ],
    solution: `SELECT 
  COUNT(s.session_id) AS total_sessions,
  COUNT(s.checkout_seconds) AS checkout_starts,
  COUNT(o.order_id) AS completed_orders
FROM sessions s
LEFT JOIN orders o ON s.session_id = o.session_id AND o.status = 'completed';`,
  },
  {
    id: 'sql-revenue-by-device',
    title: 'Revenue by Device',
    difficulty: 'Medium',
    category: 'Finance',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sessions', 'orders', 'order_items'],
    concepts: ['Joins', 'Aggregation'],
    context: 'Finance wants to know which device type generates the most revenue.',
    prompt: 'Calculate total revenue for completed orders, grouped by the device_type used in the session.',
    expectedOutput: 'Return device_type, total_revenue. Sort by revenue DESC.',
    rubric: [
      { label: 'Joins sessions, orders, and order_items', points: 6, all: [/join\s+orders/, /join\s+order_items/] },
      { label: 'Filters for completed orders', points: 3, all: [/status\s*=\s*'completed'/] },
      { label: 'Aggregates revenue correctly', points: 6, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT s.device_type, SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM sessions s
JOIN orders o ON s.session_id = o.session_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status = 'completed'
GROUP BY 1 ORDER BY 2 DESC;`,
  },
  {
    id: 'sql-high-avg-order',
    title: 'High AOV Customers',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 8,
    points: 15,
    tables: ['customers', 'orders', 'order_items'],
    concepts: ['Joins', 'Average', 'Grouping'],
    context: 'Identify customers with an Average Order Value (AOV) > $200.',
    prompt: 'Find customers whose average spend per completed order is greater than $200.',
    expectedOutput: 'Return full_name, average_order_value.',
    rubric: [
      { label: 'Calculates revenue per order', points: 5, all: [/sum\s*\(/, /group\s+by\s+order_id/] },
      { label: 'Calculates average of those order totals', points: 5, all: [/avg\s*\(/] },
      { label: 'Filters using HAVING > 200', points: 5, all: [/having\s+avg\s*\([^)]*\)\s*>\s*200/] },
    ],
    solution: `WITH order_totals AS (
  SELECT o.customer_id, o.order_id, SUM(oi.quantity * oi.unit_price) AS order_total
  FROM orders o JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status = 'completed' GROUP BY 1, 2
)
SELECT c.full_name, AVG(ot.order_total) AS average_order_value
FROM customers c JOIN order_totals ot ON c.customer_id = ot.customer_id
GROUP BY c.customer_id, c.full_name HAVING AVG(ot.order_total) > 200;`,
  },
  {
    id: 'sql-listing-velocity',
    title: 'Listing Velocity',
    difficulty: 'Hard',
    category: 'Operations',
    estimatedMinutes: 10,
    points: 20,
    tables: ['listings', 'order_items', 'orders'],
    concepts: ['Joins', 'Date Diff', 'Average'],
    context: 'How quickly does a product sell after being listed?',
    prompt: 'Calculate the average number of hours between a product being listed and its first completed order.',
    expectedOutput: 'Return avg_hours_to_first_sale.',
    rubric: [
      { label: 'Finds the first order date per product', points: 6, all: [/min\s*\(\s*order_date\s*\)/] },
      { label: 'Joins listings and first_orders', points: 6, all: [/join/] },
      { label: 'Calculates difference in hours', points: 8, any: [/extract\s*\(.*epoch/, /datediff/, /started_at\s*-\s*listed_at/] },
    ],
    solution: `WITH first_sales AS (
  SELECT oi.product_id, MIN(o.order_date) AS first_sale_date
  FROM order_items oi JOIN orders o ON oi.order_id = o.order_id
  WHERE o.status = 'completed' GROUP BY 1
)
SELECT AVG(EXTRACT(EPOCH FROM (fs.first_sale_date - l.listed_at))/3600) AS avg_hours_to_first_sale
FROM listings l JOIN first_sales fs ON l.product_id = fs.product_id
WHERE fs.first_sale_date > l.listed_at;`,
  },
  {
    id: 'sql-country-signup-stats',
    title: 'Global Signup Growth',
    difficulty: 'Easy',
    category: 'Marketing',
    estimatedMinutes: 5,
    points: 10,
    tables: ['customers'],
    concepts: ['Grouping', 'Count'],
    context: 'Marketing wants a breakdown of user base by country.',
    prompt: 'Count total customers per country, ordered by the count descending.',
    expectedOutput: 'Return country, customer_count.',
    rubric: [
      { label: 'Groups by country', points: 4, all: [/group\s+by\s+country/] },
      { label: 'Counts records correctly', points: 6, all: [/count\s*\(\s*\*\s*\)/] },
    ],
    solution: `SELECT country, COUNT(*) AS customer_count FROM customers GROUP BY 1 ORDER BY 2 DESC;`,
  },

  // --- 31-40: CATEGORY & PRODUCT PERFORMANCE (Medium/Hard) ---
  {
    id: 'sql-category-penetration',
    title: 'Category Market Share',
    difficulty: 'Medium',
    category: 'Reporting',
    estimatedMinutes: 8,
    points: 15,
    tables: ['products', 'order_items', 'orders'],
    concepts: ['Joins', 'Aggregation', 'Ratio'],
    context: 'Which category generates the highest percentage of total revenue?',
    prompt: 'Calculate the percentage of total completed revenue contributed by each product category.',
    expectedOutput: 'Return category, revenue_percentage. Sort by percentage DESC.',
    rubric: [
      { label: 'Sums revenue per category', points: 5, all: [/group\s+by\s+category/] },
      { label: 'Calculates total overall revenue', points: 5, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
      { label: 'Divides category revenue by total', points: 5, all: [/::numeric/, /\//] },
    ],
    solution: `WITH category_rev AS (
  SELECT p.category, SUM(oi.quantity * oi.unit_price) AS rev
  FROM products p JOIN order_items oi ON p.product_id = oi.product_id
  JOIN orders o ON oi.order_id = o.order_id WHERE o.status = 'completed' GROUP BY 1
),
total_rev AS (SELECT SUM(rev) as total FROM category_rev)
SELECT category, ROUND(rev / (SELECT total FROM total_rev) * 100, 2) AS revenue_percentage
FROM category_rev ORDER BY 2 DESC;`,
  },
  {
    id: 'sql-top-sellers',
    title: 'Top Performers by Region',
    difficulty: 'Medium',
    category: 'Operations',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sellers', 'listings', 'order_items', 'orders'],
    concepts: ['Joins', 'Window Functions'],
    context: 'Identify the top-selling seller in each region by total quantity sold.',
    prompt: 'Find the name of the top seller (highest total quantity sold) in each region.',
    expectedOutput: 'Return region, seller_name, total_quantity.',
    rubric: [
      { label: 'Joins all required tables', points: 5, all: [/join\s+listings/, /join\s+order_items/] },
      { label: 'Ranks sellers within region', points: 6, all: [/row_number\(\)|rank\(\)/, /partition\s+by\s+region/] },
      { label: 'Filters for top 1', points: 4, all: [/where\s+.*=\s*1/] },
    ],
    solution: `WITH seller_stats AS (
  SELECT s.region, s.seller_name, SUM(oi.quantity) AS total_qty
  FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
  JOIN order_items oi ON l.product_id = oi.product_id
  JOIN orders o ON oi.order_id = o.order_id WHERE o.status = 'completed'
  GROUP BY 1, 2
),
ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_qty DESC) as rnk FROM seller_stats
)
SELECT region, seller_name, total_qty FROM ranked WHERE rnk = 1;`,
  },
  {
    id: 'sql-low-stock-risk',
    title: 'Low Listing Risk',
    difficulty: 'Easy',
    category: 'Inventory',
    estimatedMinutes: 5,
    points: 10,
    tables: ['products', 'listings'],
    concepts: ['Grouping', 'Having'],
    context: 'Identify products that are listed by only one seller (high risk if that seller leaves).',
    prompt: 'Find product names that have exactly one entry in the listings table.',
    expectedOutput: 'Return product_name.',
    rubric: [
      { label: 'Joins products and listings', points: 4, all: [/join\s+listings/] },
      { label: 'Groups by product', points: 3, all: [/group\s+by/] },
      { label: 'HAVING count = 1', points: 3, all: [/having\s+count\s*\(\s*\*\s*\)\s*=\s*1/] },
    ],
    solution: `SELECT p.product_name FROM products p JOIN listings l ON p.product_id = l.product_id
GROUP BY p.product_id, p.product_name HAVING COUNT(*) = 1;`,
  },
  {
    id: 'sql-revenue-concentration',
    title: 'Revenue Concentration (Pareto)',
    difficulty: 'Hard',
    category: 'Finance',
    estimatedMinutes: 10,
    points: 20,
    tables: ['products', 'order_items', 'orders'],
    concepts: ['Window Functions', 'Running Total'],
    context: 'Does 20% of our products generate 80% of our revenue?',
    prompt: 'Calculate the cumulative percentage of total revenue for products, ordered by revenue DESC.',
    expectedOutput: 'Return product_name, cumulative_revenue_percent.',
    rubric: [
      { label: 'Sums revenue per product', points: 5, all: [/group\s+by/] },
      { label: 'Calculates running total revenue', points: 8, all: [/sum\s*\(.*?\)\s+over\s*\(\s*order\s+by/] },
      { label: 'Calculates percentage of total', points: 7, all: [/\//, /::numeric/] },
    ],
    solution: `WITH prod_rev AS (
  SELECT p.product_name, SUM(oi.quantity * oi.unit_price) AS rev
  FROM products p JOIN order_items oi ON p.product_id = oi.product_id
  JOIN orders o ON oi.order_id = o.order_id WHERE o.status = 'completed' GROUP BY 1
),
cumulative AS (
  SELECT *, SUM(rev) OVER (ORDER BY rev DESC) AS running_rev, SUM(rev) OVER () AS total_rev FROM prod_rev
)
SELECT product_name, ROUND(running_rev / total_rev * 100, 2) AS cumulative_revenue_percent FROM cumulative ORDER BY cumulative_revenue_percent ASC;`,
  },
  {
    id: 'sql-user-first-login-device',
    title: 'Acquisition Device',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 7,
    points: 15,
    tables: ['logins'],
    concepts: ['Window Functions', 'Filtering'],
    context: 'Marketing wants to know which device users use for their very first login.',
    prompt: 'For each user, find the device_type of their first ever login.',
    expectedOutput: 'Return user_id, first_device.',
    rubric: [
      { label: 'Uses ROW_NUMBER or RANK', points: 6, all: [/row_number\(\)/, /partition\s+by\s+user_id/] },
      { label: 'Sorts by date ASC', points: 4, all: [/order\s+by\s+login_date\s+asc/] },
      { label: 'Filters for rank = 1', points: 5, all: [/where\s+.*=\s*1/] },
    ],
    solution: `WITH ranked_logins AS (
  SELECT user_id, device_type, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date ASC) as rnk FROM logins
)
SELECT user_id, device_type AS first_device FROM ranked_logins WHERE rnk = 1;`,
  },
  {
    id: 'sql-seasonal-trends',
    title: 'Monthly Revenue Growth',
    difficulty: 'Hard',
    category: 'Finance',
    estimatedMinutes: 10,
    points: 20,
    tables: ['orders', 'order_items'],
    concepts: ['Window Functions', 'Lag', 'Growth Calculation'],
    context: 'Calculate the month-over-month revenue growth rate.',
    prompt: 'Find the MoM growth percentage in completed revenue for early 2026.',
    expectedOutput: 'Return month, total_revenue, growth_percent.',
    rubric: [
      { label: 'Sums revenue per month', points: 5, all: [/date_trunc\s*\(\s*'month'/] },
      { label: 'Uses LAG to get previous month revenue', points: 8, all: [/lag\s*\(\s*sum\s*\(\s*.*?\s*\)\s*\)/] },
      { label: 'Calculates growth % correctly', points: 7, all: [/\//, /100/] },
    ],
    solution: `WITH monthly_rev AS (
  SELECT DATE_TRUNC('month', o.order_date) AS month, SUM(oi.quantity * oi.unit_price) AS rev
  FROM orders o JOIN order_items oi ON o.order_id = oi.order_id WHERE o.status = 'completed' GROUP BY 1
)
SELECT month, rev AS total_revenue, ROUND((rev - LAG(rev) OVER (ORDER BY month)) / LAG(rev) OVER (ORDER BY month) * 100, 2) AS growth_percent
FROM monthly_rev ORDER BY month;`,
  },
  {
    id: 'sql-customer-lifetime-value',
    title: 'Customer LTV',
    difficulty: 'Medium',
    category: 'Finance',
    estimatedMinutes: 8,
    points: 15,
    tables: ['customers', 'orders', 'order_items'],
    concepts: ['Aggregation', 'Joins'],
    context: 'Calculate the lifetime value (total spend) for each customer.',
    prompt: 'Find the total spend for each customer, including those with zero spend.',
    expectedOutput: 'Return full_name, ltv. Sort by LTV DESC.',
    rubric: [
      { label: 'Uses LEFT JOIN to include zero-spend customers', points: 6, all: [/left\s+join\s+orders/] },
      { label: 'Uses COALESCE to handle null spend', points: 4, all: [/coalesce/] },
      { label: 'Sums revenue correctly', points: 5, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT c.full_name, COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS ltv
FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id AND o.status = 'completed'
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.full_name ORDER BY ltv DESC;`,
  },
  {
    id: 'sql-canceled-revenue-loss',
    title: 'Revenue Loss Analysis',
    difficulty: 'Easy',
    category: 'Finance',
    estimatedMinutes: 5,
    points: 10,
    tables: ['orders', 'order_items'],
    concepts: ['Filtering', 'Aggregation'],
    context: 'How much revenue was lost due to canceled orders?',
    prompt: 'Calculate the total potential revenue from orders with status "canceled".',
    expectedOutput: 'Return total_lost_revenue.',
    rubric: [
      { label: 'Filters for status = canceled', points: 5, all: [/status\s*=\s*'canceled'/] },
      { label: 'Sums potential revenue correctly', points: 5, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
    ],
    solution: `SELECT SUM(oi.quantity * oi.unit_price) AS total_lost_revenue FROM orders o JOIN order_items oi ON o.order_id = oi.order_id WHERE o.status = 'canceled';`,
  },
  {
    id: 'sql-signup-to-order-lag',
    title: 'Activation Speed',
    difficulty: 'Medium',
    category: 'Marketing',
    estimatedMinutes: 8,
    points: 15,
    tables: ['customers', 'orders'],
    concepts: ['Average', 'Date Difference'],
    context: 'How many days on average does it take for a user to place their first order after signing up?',
    prompt: 'Calculate the average number of days between signup_date and first completed order_date.',
    expectedOutput: 'Return avg_days_to_activation.',
    rubric: [
      { label: 'Finds first order date per customer', points: 5, all: [/min\s*\(\s*order_date\s*\)/] },
      { label: 'Subtracts signup_date from first order date', points: 5, all: [/-\s*signup_date/] },
      { label: 'Averages the differences', points: 5, all: [/avg\s*\(/] },
    ],
    solution: `WITH first_orders AS (
  SELECT customer_id, MIN(order_date) AS first_order FROM orders WHERE status = 'completed' GROUP BY 1
)
SELECT AVG(f.first_order::date - c.signup_date) AS avg_days_to_activation
FROM customers c JOIN first_orders f ON c.customer_id = f.customer_id;`,
  },
  {
    id: 'sql-seller-product-diversity',
    title: 'Seller Diversity Score',
    difficulty: 'Medium',
    category: 'Operations',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sellers', 'listings', 'products'],
    concepts: ['Grouping', 'Count Distinct'],
    context: 'Find sellers who list products across more than 2 different categories.',
    prompt: 'List seller names who have products listed in more than 2 unique product categories.',
    expectedOutput: 'Return seller_name, category_count.',
    rubric: [
      { label: 'Joins sellers, listings, and products', points: 5, all: [/join\s+listings/, /join\s+products/] },
      { label: 'Counts distinct categories per seller', points: 6, all: [/count\s*\(\s*distinct\s+category\s*\)/] },
      { label: 'HAVING count > 2', points: 4, all: [/having\s+count\s*\([^)]*\)\s*>\s*2/] },
    ],
    solution: `SELECT s.seller_name, COUNT(DISTINCT p.category) AS category_count
FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
JOIN products p ON l.product_id = p.product_id
GROUP BY s.seller_id, s.seller_name HAVING COUNT(DISTINCT p.category) > 2;`,
  },

  // --- 41-50: ADVANCED MARKETPLACE DYNAMICS (Hard/Expert) ---
  {
    id: 'sql-customer-tiering',
    title: 'Customer Segmentation',
    difficulty: 'Hard',
    category: 'Marketing',
    estimatedMinutes: 10,
    points: 20,
    tables: ['customers', 'orders', 'order_items'],
    concepts: ['Case When', 'NTILE', 'Aggregation'],
    context: 'Tier customers into "Gold" (Top 10% spenders), "Silver" (Next 20%), and "Bronze" (Rest).',
    prompt: 'Segment completed-order customers into tiers based on their total spend percentile.',
    expectedOutput: 'Return full_name, total_spend, tier.',
    rubric: [
      { label: 'Calculates total spend per customer', points: 5, all: [/sum\s*\(/] },
      { label: 'Uses NTILE(10) or percent_rank', points: 10, any: [/ntile\s*\(\s*10\s*\)/, /percent_rank\(\)/] },
      { label: 'Assigns tiers correctly with CASE', points: 5, all: [/case/, /gold/, /silver/, /bronze/] },
    ],
    solution: `WITH customer_spend AS (
  SELECT c.full_name, SUM(oi.quantity * oi.unit_price) AS spend
  FROM customers c JOIN orders o ON c.customer_id = o.customer_id
  JOIN order_items oi ON o.order_id = oi.order_id WHERE o.status = 'completed' GROUP BY 1
),
ranked AS (
  SELECT *, NTILE(10) OVER (ORDER BY spend DESC) as percentile FROM customer_spend
)
SELECT full_name, spend, CASE WHEN percentile = 1 THEN 'Gold' WHEN percentile IN (2, 3) THEN 'Silver' ELSE 'Bronze' END AS tier
FROM ranked ORDER BY spend DESC;`,
  },
  {
    id: 'sql-inventory-churn',
    title: 'Listing Expiry Rate',
    difficulty: 'Medium',
    category: 'Inventory',
    estimatedMinutes: 8,
    points: 15,
    tables: ['listings'],
    concepts: ['Grouping', 'Date Truncation'],
    context: 'How many new listings are created each week?',
    prompt: 'Calculate the weekly count of new listings in 2026.',
    expectedOutput: 'Return week_start, listing_count.',
    rubric: [
      { label: 'Truncates date to week', points: 6, all: [/date_trunc\s*\(\s*'week'/] },
      { label: 'Filters for 2026', points: 4, all: [/2026/] },
      { label: 'Counts listings correctly', points: 5, all: [/count\s*\(\s*\*\s*\)/] },
    ],
    solution: `SELECT DATE_TRUNC('week', listed_at) AS week_start, COUNT(*) AS listing_count FROM listings WHERE listed_at >= '2026-01-01' GROUP BY 1 ORDER BY 1;`,
  },
  {
    id: 'sql-checkout-efficiency',
    title: 'Checkout Friction',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['sessions', 'orders'],
    concepts: ['Aggregation', 'Filtering'],
    context: 'Compare average checkout time for completed vs canceled orders.',
    prompt: 'Calculate average checkout_seconds for sessions resulting in "completed" orders vs "canceled" orders.',
    expectedOutput: 'Return status, avg_checkout_seconds.',
    rubric: [
      { label: 'Joins sessions and orders', points: 5, all: [/join\s+orders/] },
      { label: 'Groups by order status', points: 5, all: [/group\s+by\s+status/] },
      { label: 'Averages checkout_seconds', points: 5, all: [/avg\s*\(/] },
    ],
    solution: `SELECT o.status, AVG(s.checkout_seconds) AS avg_checkout_seconds FROM sessions s JOIN orders o ON s.session_id = o.session_id WHERE o.status IN ('completed', 'canceled') GROUP BY 1;`,
  },
  {
    id: 'sql-seller-penetration',
    title: 'Seller Category Reach',
    difficulty: 'Medium',
    category: 'Operations',
    estimatedMinutes: 7,
    points: 15,
    tables: ['sellers', 'listings', 'products'],
    concepts: ['Joins', 'Count Distinct'],
    context: 'What percentage of all product categories does each seller cover?',
    prompt: 'Calculate the percentage of unique categories covered by each seller.',
    expectedOutput: 'Return seller_name, category_coverage_percent.',
    rubric: [
      { label: 'Counts categories per seller', points: 5, all: [/count\s*\(distinct\s+category\)/] },
      { label: 'Counts total unique categories', points: 5, all: [/select\s+count\s*\(distinct\s+category\)\s+from\s+products/] },
      { label: 'Calculates percentage correctly', points: 5, all: [/\//, /100/] },
    ],
    solution: `WITH total_cats AS (SELECT COUNT(DISTINCT category) as total FROM products)
SELECT s.seller_name, ROUND(COUNT(DISTINCT p.category)::numeric / (SELECT total FROM total_cats) * 100, 2) AS category_coverage_percent
FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
JOIN products p ON l.product_id = p.product_id
GROUP BY s.seller_id, s.seller_name;`,
  },
  {
    id: 'sql-high-aov-growth',
    title: 'AOV Growth by Region',
    difficulty: 'Hard',
    category: 'Finance',
    estimatedMinutes: 10,
    points: 20,
    tables: ['sellers', 'listings', 'order_items', 'orders'],
    concepts: ['Joins', 'Aggregation', 'Window Functions'],
    context: 'Calculate the MoM growth of Average Order Value (AOV) per region.',
    prompt: 'Find the month-over-month growth of Average Order Value within each seller region.',
    expectedOutput: 'Return region, month, aov_growth_percent.',
    rubric: [
      { label: 'Calculates AOV per region per month', points: 7, all: [/avg\s*\(/, /group\s+by\s+region\s*,\s*month/] },
      { label: 'Uses LAG to get previous month AOV per region', points: 8, all: [/lag\s*\(\s*.*?\s*\)\s+over\s*\(\s*partition\s+by\s+region\s+order\s+by\s+month\s*\)/] },
      { label: 'Calculates growth % correctly', points: 5, all: [/\//, /100/] },
    ],
    solution: `WITH region_monthly_aov AS (
  SELECT s.region, DATE_TRUNC('month', o.order_date) AS month, AVG(oi.quantity * oi.unit_price) AS aov
  FROM sellers s JOIN listings l ON s.seller_id = l.seller_id
  JOIN order_items oi ON l.product_id = oi.product_id
  JOIN orders o ON oi.order_id = o.order_id WHERE o.status = 'completed' GROUP BY 1, 2
)
SELECT region, month, ROUND((aov - LAG(aov) OVER (PARTITION BY region ORDER BY month)) / LAG(aov) OVER (PARTITION BY region ORDER BY month) * 100, 2) AS aov_growth_percent
FROM region_monthly_aov;`,
  },
  {
    id: 'sql-customer-retention-cohort',
    title: 'Cohort Retention (Month 1)',
    difficulty: 'Hard',
    category: 'Analytics',
    estimatedMinutes: 10,
    points: 20,
    tables: ['customers', 'orders'],
    concepts: ['CTE', 'Join', 'Ratio'],
    context: 'Find the percentage of customers who signed up in Jan 2026 and placed an order in Feb 2026.',
    prompt: 'Calculate the Month 1 retention for the Jan 2026 signup cohort.',
    expectedOutput: 'Return jan_cohort_size, retained_in_feb, retention_percent.',
    rubric: [
      { label: 'Identifies Jan 2026 signups', points: 5, all: [/signup_date\s*>=\s*'2026-01-01'/, /signup_date\s*<\s*'2026-02-01'/] },
      { label: 'Identifies which of those ordered in Feb 2026', points: 8, all: [/join\s+orders/, /order_date\s*>=\s*'2026-02-01'/, /order_date\s*<\s*'2026-03-01'/] },
      { label: 'Calculates percentage correctly', points: 7, all: [/\//, /100/] },
    ],
    solution: `WITH jan_signups AS (
  SELECT customer_id FROM customers WHERE signup_date >= '2026-01-01' AND signup_date < '2026-02-01'
),
retained AS (
  SELECT DISTINCT j.customer_id FROM jan_signups j
  JOIN orders o ON j.customer_id = o.customer_id
  WHERE o.order_date >= '2026-02-01' AND o.order_date < '2026-03-01' AND o.status = 'completed'
)
SELECT 
  (SELECT COUNT(*) FROM jan_signups) AS jan_cohort_size,
  (SELECT COUNT(*) FROM retained) AS retained_in_feb,
  ROUND((SELECT COUNT(*) FROM retained)::numeric / (SELECT COUNT(*) FROM jan_signups) * 100, 2) AS retention_percent;`,
  },
  {
    id: 'sql-order-frequency-bucket',
    title: 'Order Frequency Distribution',
    difficulty: 'Medium',
    category: 'Product',
    estimatedMinutes: 8,
    points: 15,
    tables: ['orders'],
    concepts: ['Grouping', 'Count'],
    context: 'How many customers have placed exactly 1, 2, 3, or 4+ orders?',
    prompt: 'Group customers by their total completed order count (1, 2, 3, 4+).',
    expectedOutput: 'Return order_bucket, customer_count.',
    rubric: [
      { label: 'Counts orders per customer', points: 5, all: [/count\s*\(\s*\*\s*\)/, /group\s+by\s+customer_id/] },
      { label: 'Categorizes counts using CASE', points: 6, all: [/case/, /when\s+count.*=\s*1/, /4\+/] },
      { label: 'Aggregates counts of customers per bucket', points: 4, all: [/group\s+by\s+1/] },
    ],
    solution: `WITH counts AS (
  SELECT customer_id, COUNT(*) as c FROM orders WHERE status = 'completed' GROUP BY 1
)
SELECT CASE WHEN c = 1 THEN '1' WHEN c = 2 THEN '2' WHEN c = 3 THEN '3' ELSE '4+' END AS order_bucket,
COUNT(*) AS customer_count FROM counts GROUP BY 1 ORDER BY 1;`,
  },
  {
    id: 'sql-low-activity-sessions',
    title: 'Bounce Rate Sessions',
    difficulty: 'Easy',
    category: 'Product',
    estimatedMinutes: 5,
    points: 10,
    tables: ['sessions'],
    concepts: ['Filtering', 'Count'],
    context: 'A "bounce" session is one where checkout_seconds is null.',
    prompt: 'Calculate the total count of bounce sessions.',
    expectedOutput: 'Return bounce_count.',
    rubric: [
      { label: 'Filters for checkout_seconds is null', points: 6, all: [/checkout_seconds\s+is\s+null/] },
      { label: 'Counts records correctly', points: 4, all: [/count\s*\(\s*\*\s*\)/] },
    ],
    solution: `SELECT COUNT(*) AS bounce_count FROM sessions WHERE checkout_seconds IS NULL;`,
  },
  {
    id: 'sql-product-category-growth',
    title: 'Category Popularity Growth',
    difficulty: 'Hard',
    category: 'Marketing',
    estimatedMinutes: 10,
    points: 20,
    tables: ['products', 'listings'],
    concepts: ['Joins', 'Aggregation', 'Growth Calculation'],
    context: 'Compare the number of new listings per category between Q1 and Q2.',
    prompt: 'Find categories that had a > 20% increase in new listings from Q1 2026 to Q2 2026.',
    expectedOutput: 'Return category, q1_listings, q2_listings, growth_percent.',
    rubric: [
      { label: 'Counts listings per category per quarter', points: 7, all: [/extract\s*\(quarter/, /group\s+by\s+category/] },
      { label: 'Calculates growth % correctly', points: 8, all: [/\//, /100/] },
      { label: 'Filters for growth > 20%', points: 5, all: [/having.*>\s*20/] },
    ],
    solution: `WITH quarterly AS (
  SELECT p.category, 
    COUNT(CASE WHEN listed_at >= '2026-01-01' AND listed_at < '2026-04-01' THEN 1 END) AS q1,
    COUNT(CASE WHEN listed_at >= '2026-04-01' AND listed_at < '2026-07-01' THEN 1 END) AS q2
  FROM products p JOIN listings l ON p.product_id = l.product_id GROUP BY 1
)
SELECT category, q1 AS q1_listings, q2 AS q2_listings, ROUND((q2 - q1)::numeric / NULLIF(q1, 0) * 100, 2) AS growth_percent
FROM quarterly WHERE (q2 - q1)::numeric / NULLIF(q1, 0) * 100 > 20;`,
  },
  {
    id: 'sql-final-revenue-summary',
    title: 'Total Portal Revenue',
    difficulty: 'Easy',
    category: 'Finance',
    estimatedMinutes: 5,
    points: 10,
    tables: ['orders', 'order_items'],
    concepts: ['Aggregation'],
    context: 'Final check: what is the total revenue of the entire portal to date?',
    prompt: 'Calculate the grand total revenue for all completed orders.',
    expectedOutput: 'Return grand_total_revenue.',
    rubric: [
      { label: 'Sums quantity * unit_price', points: 6, all: [/sum\s*\(\s*quantity\s*\*\s*unit_price\s*\)/] },
      { label: 'Filters for completed orders', points: 4, all: [/status\s*=\s*'completed'/] },
    ],
    solution: `SELECT SUM(oi.quantity * oi.unit_price) AS grand_total_revenue FROM orders o JOIN order_items oi ON o.order_id = oi.order_id WHERE o.status = 'completed';`,
  },
];

export const TOTAL_POINTS = SQL_QUESTIONS.reduce((sum, question) => sum + question.points, 0);
