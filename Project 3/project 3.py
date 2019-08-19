#!/usr/bin/env python
# coding: utf-8

# ### Nama Kelompok: Aditya Setiawan, Dwikie Setiawan, Agnes S, Dian P.
# ### DTS A
# ### Analisa dan Visualisasi Data 
# ### Analisa Kebakaran Hutan 
# ### File From Forest Fires Data Set [Cortez and Morais, 2007], UCI Machine Learning Repository

# In[ ]:


import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import statsmodels.api as sm


# In[178]:


dataset = pd.read_csv('forestfires.csv')
dataset.month.replace(('jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'),(1,2,3,4,5,6,7,8,9,10,11,12), inplace=True)
dataset.day.replace(('mon','tue','wed','thu','fri','sat','sun'),(1,2,3,4,5,6,7), inplace=True)
dataset.head(20)


# In[18]:


dataset.describe()


# In[44]:


# Collecting X and Y
X = dataset['temp'].values
Y = dataset['RH'].values
z = sm.add_constant(X)
result = sm.OLS(Y,X).fit()
result.summary()


# In[48]:


# Plot the Input Data
plt.scatter(X, Y, c='green', label='Data points')
plt.xlabel('temp')
plt.ylabel('RH')
plt.legend()
plt.show()


# In[50]:


# Calculating coefficient (menghitung secaramanual untuk memperoleh b0 dan b1)
#menghitung nilai rata-rata x dan rata-rata y

# Mean X and Y
mean_x = np.mean(X)
mean_y = np.mean(Y)

# Total number of values (menghitung jumlah data)
n = len(X)

# Using the formula to calculate theta1 and theta2 (mencari nilai b0 dan b1)
numer = 0 #pembilang
denom = 0 #penyebut
for i in range(n):
    numer += (X[i] - mean_x) * (Y[i] - mean_y)
    denom += (X[i] - mean_x) ** 2
b1 = numer / denom
b0 = mean_y - (b1 * mean_x)

# Printing coefficients
print("coefficients for regression",b1, b0)


# In[52]:


# Plotting Values and Regression Line
get_ipython().run_line_magic('matplotlib', 'inline')

plt.rcParams['figure.figsize'] = (10.0, 5.0)
# max_x = np.max(X) + 100
# min_x = np.min(X) - 100

y = b0 + b1 * X

# Ploting Line
plt.plot(X, y, color='blue', label='Regression Line')
# Ploting Scatter Points
plt.scatter(X, Y, c='green', label='Scatter data')

plt.xlabel('temp')
plt.ylabel('RH')
plt.legend()
plt.show()


# In[54]:


x_values = list(dataset['X'])
y_values = list(dataset['Y'])

loc_values = []

for index in range(0, len(x_values)):
    temp_value = []

    temp_value.append(x_values[index])
    temp_value.append(y_values[index])
    loc_values.append(temp_value)


# In[56]:


month_values = list(dataset['month'])
day_values = list(dataset['day'])

ffmc_values = list(dataset['FFMC'])
dmc_values = list(dataset['DMC'])
dc_values = list(dataset['DC'])
isi_values = list(dataset['ISI'])

temp_values = list(dataset['temp'])
rh_values = list(dataset['RH'])
wind_values = list(dataset['wind'])
rain_values = list(dataset['rain'])

area_values = list(dataset['area'])


# In[57]:


attribute_list = []

for index in range(0, len(x_values)):
    temp_list = []
    
    temp_list.append(x_values[index])
    temp_list.append(y_values[index])
    
    temp_list.append(month_values[index])
    temp_list.append(day_values[index])

    temp_list.append(ffmc_values[index])
    temp_list.append(dmc_values[index])
    temp_list.append(dc_values[index])
    temp_list.append(isi_values[index])

    temp_list.append(temp_values[index])
    temp_list.append(rh_values[index])
    temp_list.append(wind_values[index])
    temp_list.append(rain_values[index])
    
    attribute_list.append(temp_list)


# In[58]:


def count_points(x_points, y_points, scaling_factor):
    count_array = []
    
    for index in range(0, len(x_points)):
        temp_value = [x_points[index], y_points[index]]
        count = 0
        
        for value in loc_values:
            if(temp_value == value):
                count = count + 1
        count_array.append(count * scaling_factor )

    return count_array


# In[86]:


def histogram_plot(dataset, title):
    plt.figure(figsize=(8, 6))    
    
    ax = plt.subplot()    
    ax.spines["top"].set_visible(False)    
    ax.spines["bottom"].set_visible(False)    
    ax.spines["right"].set_visible(False)    
    ax.spines["left"].set_visible(False)
    
    ax.get_xaxis().tick_bottom()
    ax.get_yaxis().tick_left() 
    
    plt.title(title, fontsize = 22)
    plt.hist(dataset, color ='#c62c6e', edgecolor='black', linewidth=1.2)


# In[67]:


plt.figure(figsize=(8, 6))    
    
ax = plt.subplot()    
ax.spines["top"].set_visible(False)    
ax.spines["bottom"].set_visible(False)    
ax.spines["right"].set_visible(False)    
ax.spines["left"].set_visible(False)
    
ax.get_xaxis().tick_bottom()
ax.get_yaxis().tick_left() 
    
plt.title("Fire location plot", fontsize = 22)
plt.scatter(x_values, y_values, s = count_points(x_values, y_values, 25), alpha = 0.3, c='red')
plt.xlabel('koordinat X')
plt.ylabel('koordinat Y')
plt.show()


# In[87]:


histogram_plot(month_values, title = "Month distribution")
plt.xlabel('Bulan')
plt.ylabel('Frekuensi Terjadi Kebakaran')
plt.show()


# In[89]:


histogram_plot(day_values, title = "Day distribution")
plt.xlabel('Hari')
plt.ylabel('Frekuensi Terjadi Kebakaran')
plt.show()


# In[91]:


histogram_plot(area_values, title = "Burned area distribution")
plt.xlabel('Luas Area (Hektar)')
plt.ylabel('Frekuensi Terjadi Kebakaran')
plt.show()


# In[200]:


D = dataset.iloc[:, [8, 2,]].values


# In[201]:


from sklearn.cluster import KMeans
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters = i, init = 'k-means++', random_state = 42)
    kmeans.fit(D)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('Metode Elbow')
plt.xlabel('Jumlah clusters')
plt.ylabel('WCSS')
plt.show()


# In[202]:


kmeans = KMeans(n_clusters = 5, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(D)


# In[203]:


plt.scatter(D[y_kmeans == 0, 0], D[y_kmeans == 0, 1], s = 100, c = 'red', label = 'Cluster 1')
plt.scatter(D[y_kmeans == 1, 0], D[y_kmeans == 1, 1], s = 100, c = 'blue', label = 'Cluster 2')
plt.scatter(D[y_kmeans == 2, 0], D[y_kmeans == 2, 1], s = 100, c = 'green', label = 'Cluster 3')
plt.scatter(D[y_kmeans == 3, 0], D[y_kmeans == 3, 1], s = 100, c = 'cyan', label = 'Cluster 4')
plt.scatter(D[y_kmeans == 4, 0], D[y_kmeans == 4, 1], s = 100, c = 'magenta', label = 'Cluster 5')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = 200, c = 'yellow', label = 'Centroids')
plt.title('Clusters ')
plt.xlabel('Temperatur(celcius)')
plt.ylabel('Bulan')
plt.legend()
plt.show()


# In[ ]:





# In[ ]:




