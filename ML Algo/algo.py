import copy, math
import faulthandler
import numpy as np
import matplotlib.pyplot as plt
import pickle

X_train = np.array([[2, 3, 6, 8], [5, 2, 7, 9], [1, 5, 3, 4]])
y_train = np.array([3.3, 4.7, 0.6])
b_init = 0
w_init = np.array([ 0.2, -0.3, 0.1, 0.4])
print(f"w_init shape: {w_init.shape}, b_init type: {type(b_init)}")

def predict2(x, w, b): 
    
    p = np.dot(x, w) + b     
    return p     
# get a row from our training data
x_vec = X_train[0,:]
#print(f"x_vec shape {x_vec.shape}, x_vec value: {x_vec}")

# make a predict2ion
f_wb = predict2(x_vec,w_init, b_init)
#print(f"f_wb shape {f_wb.shape}, predict2ion: {f_wb}")

def compute_cost(X, y, w, b): 
   
    m = X.shape[0]
    cost = 0.0
    for i in range(m):                                
        f_wb_i = np.dot(X[i], w) + b           #(n,)(n,) = scalar (see np.dot)
        cost = cost + (f_wb_i - y[i])**2       #scalar
    cost = cost / (2 * m)                      #scalar    
    return cost
    # Compute and display cost using our pre-chosen optimal parameters. 
cost = compute_cost(X_train, y_train, w_init, b_init)
print(f'Cost at optimal w : {cost}')

def compute_gradient(X, y, w, b): 
  
    m,n = X.shape           #(number of examples, number of features)
    dj_dw = np.zeros((n,))
    dj_db = 0.

    for i in range(m):                             
        err = (np.dot(X[i], w) + b) - y[i]   
        for j in range(n):                         
            dj_dw[j] = dj_dw[j] + err * X[i, j]    
        dj_db = dj_db + err                        
    dj_dw = dj_dw / m                                
    dj_db = dj_db / m                                
        
    return dj_db, dj_dw


#Compute and display gradient 
tmp_dj_db, tmp_dj_dw = compute_gradient(X_train, y_train, w_init, b_init)
#print(f'dj_db at initial w,b: {tmp_dj_db}')
#print(f'dj_dw at initial w,b: \n {tmp_dj_dw}')

def gradient_descent(X, y, w_in, b_in, cost_function, gradient_function, alpha, num_iters): 
   
    
    # An array to store cost J and w's at each iteration primarily for graphing later
    J_history = []
    w = copy.deepcopy(w_in)  #avoid modifying global w within function
    b = b_in
    
    for i in range(num_iters):

        # Calculate the gradient and update the parameters
        dj_db,dj_dw = gradient_function(X, y, w, b)   ##None

        # Update Parameters using w, b, alpha and gradient
        w = w - alpha * dj_dw               
        b = b - alpha * dj_db               


        # Print cost every at intervals 10 times or as many iterations if < 10
        #if i% math.ceil(num_iters / 40) == 0:
            #print(f"Iteration {i:4d}: Cost {J_history[-1]:8.2f}   ")
        
    return w, b, J_history 

def linearregretion():
    initial_w = np.zeros_like(w_init)
    initial_b = 0.
    # some gradient descent settings
    iterations = 1000
    alpha = 5.0e-3
    # run gradient descent 
    w_final, b_final, J_hist = gradient_descent(X_train, y_train, initial_w, initial_b, compute_cost, compute_gradient, alpha, iterations)
    # print(f"b,w found by gradient descent: {b_final:0.2f},{w_final} ")
    m,_ = X_train.shape
    # for i in range(m):
    #      X_train[i]=(X_train[i])*(2.5)
    #      y_train[i]=(y_train[i])*(2.5)
    #     print(f"predict2ion: {np.dot(X_train[i], w_final) + b_final:0.2f}, target value: {y_train[i]}")

    predict2(x, w=w_final, b=b_final)
        

inputt=[int(x) for x in "45 32 60".split(' ')]
final=[np.array(inputt)]
eff=linearregretion(inputt)


b=eff.predict_proba(final)


pickle.dumb(eff.open('model.pkl','wb'))
model=pickle.load(open('model.pkl','rb'))

# n=int(input("Enter the number of months in future you want to evaluate "))
# p= []
# c=[]
# for j in range(1,n+1):
#     a=[]
#     for i in range(4):
#          l=int(input())
#          a.append(l)
#     print(a)
#     k= np.dot(a, w_final) + b_final
#     m=10*k
#     p.append(m)
#     c.append(j)

# plt.figure()

# plt.subplot(1,2,1)
# plt.plot(c, p, color='green', linestyle='dashed', linewidth = 3,marker='o', markerfacecolor='blue', markersize=12)
# plt.xlabel('upcoming months ')
# plt.ylabel('Efficiency of startup in percentage ')
# plt.title('FUTURE PREDICT2ION')

# plt.subplot(1,2,2)
# plt.bar(c, m, tick_label = c,width = 0.8, color = ['red', 'green'])
# plt.xlabel('upcoming months ')
# plt.ylabel('Efficiency of startup')
# plt.title('FUTURE PREDICT2ION')

# plt.show()

